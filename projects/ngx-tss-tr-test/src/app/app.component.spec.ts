import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CountryDetailsComponent} from './country-details.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {CountryReducer, EntityReducer, RegionReducer, RegionsReducer} from './app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {NgxTssTrModule} from '../../../ngx-tss-tr/src/lib/ngx-tss-tr.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CountryDetailsComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
          region: RegionReducer,
          regions: RegionsReducer,
          entities: EntityReducer,
          countries: CountryReducer
        }),
        EffectsModule.forRoot([AppEffects]),
        NgxTssTrModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as region 'null'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.region).toEqual(null);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar-brand.mb-0.h1').textContent).toContain('World Journey');
  });
});
