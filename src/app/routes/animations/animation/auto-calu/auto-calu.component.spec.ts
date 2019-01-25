import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCaluComponent } from './auto-calu.component';

describe('AutoCaluComponent', () => {
  let component: AutoCaluComponent;
  let fixture: ComponentFixture<AutoCaluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
