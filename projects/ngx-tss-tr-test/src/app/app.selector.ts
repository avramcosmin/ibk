import {EntitiesByRegion, State} from './app.interface';
import {createSelector} from '@ngrx/store';

export const selectEntities = (state: State) => state.entities;

export const selectCountry = createSelector(
  selectEntities,
  (entities: EntitiesByRegion, props: { country: string, region: string }) => {
    return entities[props.region][props.country];
  }
);
