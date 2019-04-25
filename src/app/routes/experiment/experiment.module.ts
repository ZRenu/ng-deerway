import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WarningComponent } from './warning/warning.component';
import { ExperimentRoutingModules } from './experiment-routing.module';
import { DemoComponent } from './demo/demo/demo.component';

@NgModule({
  imports: [
    SharedModule,
    ExperimentRoutingModules
  ],
  declarations: [WarningComponent, DemoComponent]
})
export class ExperimentModule { }
