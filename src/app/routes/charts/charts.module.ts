import { NgModule } from '@angular/core';
import { ChartsRoutingModules } from './charts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LineComponent } from './line/line.component';

@NgModule({
  imports: [
    SharedModule,
    ChartsRoutingModules
  ],
  declarations: [LineComponent]
})
export class ChartsModule { }
