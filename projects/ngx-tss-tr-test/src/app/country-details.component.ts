import {Component, Input} from '@angular/core';
import {Country} from './app.interface';

@Component({
  selector: 'app-country-details',
  template: `
    <div class="table-responsive">
      <table class="table table-bordered table-sm">
        <tr>
          <td colspan="2">
            <h6 class="display-4">
              <img class="mr-2"
                   alt="{{country.name}}"
                   width="20%"
                   height="20%"
                   [src]="country.flag"/>
              {{country.name}}
            </h6>
          </td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{{country.capital}}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{{country.population | number}}</td>
        </tr>
        <tr>
          <th>Currencies</th>
          <td>
            <ul class="list-unstyled m-0">
              <li *ngFor="let currency of country.currencies">{{currency | sdoCurrency}}</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  `
})
export class CountryDetailsComponent {
  @Input() country: Country;
}
