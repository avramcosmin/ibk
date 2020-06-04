import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sdo-ngx-tss-tr',
  template: `
    <div class="form-group">
      <label>{{label}}</label>
      <select class="form-control"
              [disabled]="!values.length"
              (change)="emit($event.target)">
        <option [value]="null">--</option>
        <option *ngFor="let value of values">{{value}}</option>
      </select>
    </div>
  `,
  styles: []
})
export class NgxTssTrComponent {
  @Input() label: string;
  @Input() values: string[] = [];
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  emit(el: EventTarget): void {
    this.selected.emit((el as HTMLSelectElement).value);
  }
}
