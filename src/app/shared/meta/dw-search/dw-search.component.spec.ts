import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwSearchComponent } from './dw-search.component';

describe('DwSearchComponent', () => {
  let component: DwSearchComponent;
  let fixture: ComponentFixture<DwSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
