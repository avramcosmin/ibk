import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTssTrComponent } from './ngx-tss-tr.component';
import {AppComponent} from '../../../ngx-tss-tr-test/src/app/app.component';

describe('Ngx Tss Tr Component', () => {
  let component: NgxTssTrComponent;
  let fixture: ComponentFixture<NgxTssTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTssTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTssTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ngx-tss-tr component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a div with class `form-group`', () => {
    const i = fixture.componentInstance;
    i.label = 'Country';
    i.values = ['Romania'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.form-group')).toBeTruthy();
  });

  it('should render a second option', () => {
    const i = fixture.componentInstance;
    i.label = 'Country';
    i.values = ['Romania'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('select.form-control').children[1].textContent).toContain('Romania');
  });

  it('should render a first option with value null', () => {
    const i = fixture.componentInstance;
    i.label = 'Country';
    i.values = ['Romania'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('select.form-control').children[0].value).toBe('null');
  });

  it('should render a label', () => {
    const i = fixture.componentInstance;
    i.label = 'Country';
    i.values = ['Romania'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Country');
  });
});
