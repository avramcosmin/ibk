import {Component, ComponentRef, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';
import {EntryInterface} from '../interface/entry.interface';
import {PageLoadingComponent} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-loading/page-loading.component';
import {PageLoadingWorker} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-loading/page-loading.worker';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html'
})
export class EntriesComponent implements OnInit {
  entries: EntryInterface[];
  pageLoadingCompRef: ComponentRef<PageLoadingComponent>;

  constructor(private httpService: HttpService,
              private pageLoadingWorker: PageLoadingWorker) {
  }

  ngOnInit(): void {
    this.pageLoadingCompRef = this.pageLoadingWorker.display();
    this.httpService.get().subscribe(
      (res: EntryInterface[]) => {
        this.pageLoadingWorker.destroy(this.pageLoadingCompRef);
        this.entries = res;
      }
    );
  }
}
