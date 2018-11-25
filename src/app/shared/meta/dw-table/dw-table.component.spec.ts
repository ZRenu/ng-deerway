import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwTableComponent } from './dw-table.component';

describe('DwTableComponent', () => {
  let component: DwTableComponent;
  let fixture: ComponentFixture<DwTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
