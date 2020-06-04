import {Component, ComponentRef, OnInit} from '@angular/core';
import {EntryInterface} from '../interface/entry.interface';
import {HttpService} from '../service/http.service';
import {ActivatedRoute} from '@angular/router';
import {StockChart} from 'angular-highcharts';
import {PageLoadingComponent} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-loading/page-loading.component';
import {PageLoadingWorker} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-loading/page-loading.worker';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html'
})
export class EntryComponent implements OnInit {
  entry: EntryInterface;
  pageLoadingCompRef: ComponentRef<PageLoadingComponent>;
  stock: StockChart;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private pageLoadingWorker: PageLoadingWorker) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.pageLoadingCompRef = this.pageLoadingWorker.display();
        return this.httpService.getOne(+params.get('id')).subscribe(
          (res: EntryInterface) => {
            this.pageLoadingWorker.destroy(this.pageLoadingCompRef);
            this.entry = res;
            this.stock = new StockChart({
              rangeSelector: {
                selected: 1
              },
              title: {
                text: 'AAPL Stock Price'
              },

              series: [{
                name: 'AAPL',
                type: 'line',
                data: res.chart.map(str => [str.x, str.y]),
                tooltip: {
                  valueDecimals: 2
                }
              }]
            });
          }
        );
      }
    );
  }
}
