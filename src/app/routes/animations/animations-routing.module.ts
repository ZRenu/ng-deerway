import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './animation/home/home.component';
import { AboutComponent } from './animation/about/about.component';
import { AutoCaluComponent } from './animation/auto-calu/auto-calu.component';
import { EnterLeaveComponent } from './animation/enter-leave/enter-leave.component';
import { FilterComponent } from './animation/filter/filter.component';
import { GroupsComponent } from './animation/groups/groups.component';
import { OpenCloseComponent } from './animation/open-close/open-close.component';
import { StatusComponent } from './animation/status/status.component';
import { ToggleComponent } from './animation/toggle/toggle.component';
const routes: Routes = [
    { path: '', redirectTo: 'animation', pathMatch: 'full' },
    {
        path: 'animation', component: AnimationComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
            { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
            { path: 'auto', component: AutoCaluComponent },
            { path: 'enter', component: EnterLeaveComponent },
            { path: 'filter', component: FilterComponent, data: { animation: 'FilterPage' } },
            { path: 'groups', component: GroupsComponent },
            { path: 'open', component: OpenCloseComponent },
            { path: 'status', component: StatusComponent },
            { path: 'toggle', component: ToggleComponent }
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnimationsRoutingModules { }
