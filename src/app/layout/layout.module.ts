import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DefaultComponent } from './default/default.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

const COMPONENTS = [
  DefaultComponent,
  FullscreenComponent
];
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
