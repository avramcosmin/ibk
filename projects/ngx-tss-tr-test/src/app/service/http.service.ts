import {Injectable} from '@angular/core';
import {HttpAbstract} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-worker/http.abstract';
import {HttpWorker} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-worker/http.worker';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends HttpAbstract {
  constructor(readonly httpWorker: HttpWorker) {
    super('api/entries', httpWorker);
  }
}
