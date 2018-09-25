import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerComponent } from './marker/marker.component';
import { StartComponent } from './start/start.component';
const routes: Routes = [
    { path: '', redirectTo: 'marker', pathMatch: 'full' },
    {
        path: 'marker', component: MarkerComponent
    },
    {
        path: 'start', component: StartComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule { }
