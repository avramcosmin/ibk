import {NgxTssTrPipe} from './ngx-tss-tr.pipe';
import {TestBed} from '@angular/core/testing';

describe(
  'NGX TSS TR Pipe',
  () => {
    let ngxTssTrPipe: NgxTssTrPipe;


    beforeEach(() => {
      TestBed.configureTestingModule({});
      ngxTssTrPipe = new NgxTssTrPipe();
    });

    it(
      'it should return EUR',
      () => {
        expect(ngxTssTrPipe.transform({
          code: 'EUR',
          name: 'Euro',
          symbol: '€'
        })).toBe('Euro (EUR)');
      }
    );

    it(
      'it should return EUR',
      () => {
        expect(ngxTssTrPipe.transform({
          code: '(none)',
          name: 'Faroese króna',
          symbol: 'kr'
        })).toBe('Faroese króna (none)');
      }
    );
  }
);
