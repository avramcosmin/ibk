import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  getCountries(region: 'Europe' | 'Asia'): Observable<object> {
    return this.http
      .get('https://restcountries.eu/rest/v2/region/' + region.toLowerCase());
  }
}
