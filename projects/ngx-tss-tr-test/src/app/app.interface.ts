export interface State {
  region: string | null;
  regions: Regions;
  entities: EntitiesByRegion;
  countries: CountriesByRegion;
}

export interface Regions {
  [index: number]: 'Europe' | 'Asia';
}

export interface EntitiesByRegion {
  Europe: Entities;
  Asia: Entities;
}

export interface Entities {
  [id: string]: Country;
}

export interface CountriesByRegion {
  Europe: string[];
  Asia: string[];
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: null | number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currencies[];
  languages: Languages[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBlocs[];
  cioc: string;
}

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

export interface RegionalBlocs {
  acronym: string;
  name: string;
  otherAcronyms: string;
  otherNames: string;
}
