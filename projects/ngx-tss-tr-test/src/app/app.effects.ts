import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {AppService} from './app.service';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {countriesLoaded, loadCountries} from './app.action';
import {Country} from './app.interface';
import {Action} from '@ngrx/store';

@Injectable()
export class AppEffects {
  loadCountries$: Observable<Action | unknown>;

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {
    this.loadCountries$ = createEffect(
      () => this.actions$
        .pipe(
          ofType(loadCountries),
          exhaustMap(
            (action: any) => {
              const region = action.region;
              return this.appService
                .getCountries(region)
                .pipe(
                  map(
                    (countries: Country[]) => {
                      return countriesLoaded({countries, region});
                    },
                    catchError(() => EMPTY)
                  )
                );
            }
          )
        )
    );
  }
}
