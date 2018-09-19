import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DefaultComponent } from './default/default.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { PassportComponent } from './passport/passport.component';

const COMPONENTS = [
  DefaultComponent,
  FullscreenComponent
];
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS,
    PassportComponent
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
