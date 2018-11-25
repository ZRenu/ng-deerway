import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwDatePickerComponent } from './dw-date-picker.component';

describe('DwDatePickerComponent', () => {
  let component: DwDatePickerComponent;
  let fixture: ComponentFixture<DwDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
