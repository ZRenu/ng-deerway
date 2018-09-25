import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineComponent } from './line/line.component';
const routes: Routes = [
    { path: '', redirectTo: 'line', pathMatch: 'full' },
    { path: 'line', component: LineComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModules { }
