import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WarningComponent } from './warning/warning.component';
import { ExperimentRoutingModules } from './experiment-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ExperimentRoutingModules
  ],
  declarations: [WarningComponent]
})
export class ExperimentModule { }
