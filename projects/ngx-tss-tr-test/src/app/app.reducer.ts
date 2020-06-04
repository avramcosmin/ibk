import {Action, createReducer, on} from '@ngrx/store';
import {countriesLoaded, regionSelected} from './app.action';
import {CountriesByRegion, Country, Entities, EntitiesByRegion, Regions} from './app.interface';
import {regionsArray} from './app.constant';

export function EntityReducer(state: EntitiesByRegion, action: Action) {
  const reducer = createReducer(
    {
      Europe: {},
      Asia: {}
    },
    on(
      countriesLoaded,
      (s: EntitiesByRegion, {countries, region}) => {
        return {
          ...s,
          [region]: countries.reduce(
            (accumulator: Entities, currentValue: Country) => {
              const {name, capital, population, currencies, flag} = currentValue;
              return {
                ...accumulator,
                [currentValue.name]: {name, capital, population, currencies, flag}
              };
            },
            {}
          )
        };
      }
    )
  );

  return reducer(state, action);
}

export function CountryReducer(state: CountriesByRegion, action: Action) {
  const reducer = createReducer(
    {
      Europe: [],
      Asia: []
    },
    on(
      countriesLoaded,
      (s: CountriesByRegion, {countries, region}) => {
        return {
          ...s,
          [region]: countries.map(
            (country: Country) => {
              return country.name;
            }
          )
        };
      }
    )
  );

  return reducer(state, action);
}

export function RegionsReducer(state: ['Europe', 'Asia'], action: Action) {
  const reducer = createReducer(regionsArray);

  return reducer(state, action);
}

export function RegionReducer(state: string | null, action: Action) {
  const reducer = createReducer(
    null,
    on(
      regionSelected,
      (s: string, {region}) => {
        return region;
      }
    )
  );

  return reducer(state, action);
}
