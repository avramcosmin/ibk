// Copyright (c) [2013] [Avram Cosmin]
// Extracted for offline use from https://github.com/maakoni/ngx-loading
import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxLoadingService {
  constructor(private translate: TranslateService) {
  }

  initSubscription(callback?: (str: string) => void): Subscription | undefined {
    if (callback) {
      return this.translate.stream('kolmi.loading').subscribe(
        (str: string) => {
          callback(str);
        }
      );
    }

    return undefined;
  }
}
