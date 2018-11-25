import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwInfoModelComponent } from './dw-info-model.component';

describe('DwInfoModelComponent', () => {
  let component: DwInfoModelComponent;
  let fixture: ComponentFixture<DwInfoModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwInfoModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwInfoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
