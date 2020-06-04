import {NgModule} from '@angular/core';
import {NgxTssTrComponent} from './ngx-tss-tr.component';
import {CommonModule} from '@angular/common';
import {NgxTssTrPipe} from './ngx-tss-tr.pipe';
import {PageLoadingComponent} from './maakoni-offline/ngx-loading/page-loading.component';
import {PageLoadingDirective} from './maakoni-offline/ngx-loading/page-loading.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxTssTrComponent,
    NgxTssTrPipe,
    PageLoadingComponent,
    PageLoadingDirective
  ],
  exports: [
    NgxTssTrComponent,
    NgxTssTrPipe,
    PageLoadingComponent,
    PageLoadingDirective
  ]
})
export class NgxTssTrModule {
}
