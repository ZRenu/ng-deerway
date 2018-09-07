import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
  ],
  declarations: []
})
export class RoutesModule { }
