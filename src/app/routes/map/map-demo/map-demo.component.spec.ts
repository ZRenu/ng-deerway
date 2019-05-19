import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDemoComponent } from './map-demo.component';

describe('MapDemoComponent', () => {
  let component: MapDemoComponent;
  let fixture: ComponentFixture<MapDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
