import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {CountryReducer, EntityReducer, RegionReducer, RegionsReducer} from './app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {NgxTssTrModule} from '../../../ngx-tss-tr/src/lib/ngx-tss-tr.module';
import {CountryDetailsComponent} from './country-details.component';
import {EntryComponent} from './entry/entry.component';
import {EntriesComponent} from './entry/entries.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './service/http-loader.factory';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoggerService} from './service/logger.service';
import {HighChartsFactory} from './service/highcharts.factory';
import {KOLMI_LOGGER_SERVICE} from '../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-worker/injection-token';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    EntryComponent,
    EntriesComponent,
    NotFoundComponent
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
    NgxTssTrModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000, passThruUnknownUrl: true}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    ChartModule
  ],
  providers: [
    {
      provide: KOLMI_LOGGER_SERVICE,
      useClass: LoggerService
    },
    {provide: HIGHCHARTS_MODULES, useFactory: HighChartsFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
