import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwPaginationComponent } from './dw-pagination.component';

describe('DwPaginationComponent', () => {
  let component: DwPaginationComponent;
  let fixture: ComponentFixture<DwPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
