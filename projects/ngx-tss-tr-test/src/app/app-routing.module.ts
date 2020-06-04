import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from './entry/entry.component';
import {EntriesComponent} from './entry/entries.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'entries/:id',
    component: EntryComponent
  },
  {
    path: 'entries',
    component: EntriesComponent
  },
  {
    path: '',
    redirectTo: '/entries',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
