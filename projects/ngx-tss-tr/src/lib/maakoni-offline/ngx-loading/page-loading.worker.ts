// Copyright (c) [2013] [Avram Cosmin]
// Extracted for offline use from https://github.com/maakoni/ngx-loading
import {ComponentRef, EventEmitter, Injectable} from '@angular/core';
import {PageLoadingComponent} from './page-loading.component';
import {DisplayOptionsInterface} from './ngx-loading.interface';
import {FactoryWorker} from '../ngx-worker/factory.worker';

@Injectable({
  providedIn: 'root'
})
export class PageLoadingWorker {
  constructor(private factoryWorker: FactoryWorker) {
  }

  display(options: DisplayOptionsInterface = {}): ComponentRef<PageLoadingComponent> {
    const {message, marginTop, container, hideMessage} = options;

    const compRef = this.factoryWorker.make(PageLoadingComponent);
    const compRefInstance = compRef.instance as PageLoadingComponent;

    compRefInstance._message = message;
    compRefInstance._marginTop = marginTop;
    compRefInstance._hideMessage = hideMessage;

    this.factoryWorker.glue(compRef, {container});

    return compRef;
  }

  get error$(): EventEmitter<DOMException> {
    return this.factoryWorker.error$;
  }

  destroy(compRef: ComponentRef<PageLoadingComponent>): void {
    this.factoryWorker.destroy(compRef);
  }
}
