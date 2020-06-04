import {createAction, props} from '@ngrx/store';
import {Country} from './app.interface';

export const loadCountries = createAction(
  '[Country] Load Countries',
  props<{ region: string }>()
);

export const countriesLoaded = createAction(
  '[Country] Countries Loaded',
  props<{ countries: Country[], region: string }>()
);

export const regionSelected = createAction(
  '[Region] Region selected',
  props<{region: string | null}>()
);
