import { NgModule } from '@angular/core';
import { FullComponent } from './full/full.component';
import { SharedModule } from '../../shared/shared.module';
import { ScreenRoutingModule } from './screen-routing.modules';

@NgModule({
  imports: [
    SharedModule,
    ScreenRoutingModule
  ],
  declarations: [
    FullComponent
  ]
})
export class ScreenModule { }
