import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OutsideRoutingModules } from './outside-routing.module';
import { Html2canvasComponent } from './html2canvas/html2canvas.component';
import { QriousComponent } from './qrious/qrious.component';

@NgModule({
  imports: [
    SharedModule,
    OutsideRoutingModules
  ],
  declarations: [Html2canvasComponent, QriousComponent]
})
export class OutsideModule { }
