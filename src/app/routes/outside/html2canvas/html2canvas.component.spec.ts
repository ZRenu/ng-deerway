import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html2canvasComponent } from './html2canvas.component';

describe('Html2canvasComponent', () => {
  let component: Html2canvasComponent;
  let fixture: ComponentFixture<Html2canvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html2canvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html2canvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
