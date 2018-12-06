import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwTableDynamicComponent } from './dw-table-dynamic.component';

describe('DwTableDynamicComponent', () => {
  let component: DwTableDynamicComponent;
  let fixture: ComponentFixture<DwTableDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwTableDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwTableDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
