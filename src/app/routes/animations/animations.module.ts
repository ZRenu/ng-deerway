import { NgModule } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';
import { AnimationsRoutingModules } from './animations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './animation/home/home.component';
import { AboutComponent } from './animation/about/about.component';
import { OpenCloseComponent } from './animation/open-close/open-close.component';
import { StatusComponent } from './animation/status/status.component';
import { ToggleComponent } from './animation/toggle/toggle.component';
import { EnterLeaveComponent } from './animation/enter-leave/enter-leave.component';
import { AutoCaluComponent } from './animation/auto-calu/auto-calu.component';
import { FilterComponent } from './animation/filter/filter.component';
import { GroupsComponent } from './animation/groups/groups.component';
@NgModule({
  imports: [
    SharedModule,
    AnimationsRoutingModules,
  ],
  declarations: [
    AnimationComponent,
    HomeComponent,
    AboutComponent,
    OpenCloseComponent,
    StatusComponent,
    ToggleComponent,
    EnterLeaveComponent,
    AutoCaluComponent,
    FilterComponent,
    GroupsComponent]
})
export class AnimationsModule { }
