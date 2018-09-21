import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerComponent } from './marker/marker.component';
const routes: Routes = [
    { path: '', redirectTo: 'marker', pathMatch: 'full' },
    { path: 'marker', component: MarkerComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule { }
