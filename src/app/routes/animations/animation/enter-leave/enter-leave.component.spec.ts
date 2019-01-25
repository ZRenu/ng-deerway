import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeaveComponent } from './enter-leave.component';

describe('EnterLeaveComponent', () => {
  let component: EnterLeaveComponent;
  let fixture: ComponentFixture<EnterLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
