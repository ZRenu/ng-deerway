import { NgModule } from '@angular/core';
import { MarkerComponent } from './marker/marker.component';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule
  ],
  declarations: [
    MarkerComponent
  ]
})
export class MapModule { }
