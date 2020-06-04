import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {loadCountries, regionSelected} from './app.action';
import {CountriesByRegion, Country, State} from './app.interface';
import {Observable} from 'rxjs';
import {selectCountry} from './app.selector';
import {SubSink} from 'subsink';
import {regionsArray} from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  regions$: Observable<any>;
  countriesByRegion: CountriesByRegion;
  country: Country;
  region: string | null = null;
  subSink = new SubSink();

  constructor(private store: Store<State>) {
    this.regions$ = store.pipe(
      select('regions')
    );

    this.subSink.add(
      store.pipe(
        select('region')
      )
        .subscribe(
          (region: string | null) => {
            this.region = region;
          }
        ),
      store.pipe(
        select('countries')
      )
        .subscribe(
          (countries: CountriesByRegion) => {
            this.countriesByRegion = countries;
          }
        )
    );
  }

  getCountriesArrayByRegion(region: string | null): string[] {
    return !this.countriesByRegion || !(region in this.countriesByRegion) ? [] : this.countriesByRegion[region];
  }

  loadCountries(region: string): void {
    delete this.country;

    this.store.dispatch(regionSelected({region}));

    if (regionsArray.indexOf(region) !== -1) {
      if (!this.countriesByRegion || !this.countriesByRegion[region].length) {
        this.store.dispatch(loadCountries({region}));
      }
    }
  }

  loadCountry(country: string): void {
    if (country) {
      this.subSink.add(
        this.store
          .pipe(
            select(
              selectCountry,
              {
                country,
                region: this.region
              }
            )
          )
          .subscribe(
            (res: any) => {
              this.country = res;
            }
          )
      );
    }
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
