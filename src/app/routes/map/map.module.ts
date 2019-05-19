import { NgModule } from '@angular/core';
import { MarkerComponent } from './marker/marker.component';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StartComponent } from './start/start.component';
import { AbmModule } from 'angular-baidu-maps';
import { MapDemoComponent } from './map-demo/map-demo.component';

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule,
    AbmModule.forRoot({
      apiKey: 'D7f130ce4be999b80a56cfd12ab06a7a'
    })
  ],
  declarations: [
    MarkerComponent,
    StartComponent,
    MapDemoComponent
  ]
})
export class MapModule { }
