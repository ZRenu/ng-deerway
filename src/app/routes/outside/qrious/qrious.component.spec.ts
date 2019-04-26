import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QriousComponent } from './qrious.component';

describe('QriousComponent', () => {
  let component: QriousComponent;
  let fixture: ComponentFixture<QriousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QriousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
