import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DefaultComponent } from './default/default.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { PassportComponent } from './passport/passport.component';
import { HeaderComponent } from './default/header/header.component';
import { SiderComponent } from './default/sider/sider.component';
import { BreadcrumbComponent } from './default/breadcrumb/breadcrumb.component';

const COMPONENTS = [
  DefaultComponent,
  FullscreenComponent,
  PassportComponent,
  HeaderComponent,
  SiderComponent,
  BreadcrumbComponent
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
