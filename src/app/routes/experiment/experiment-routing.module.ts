import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningComponent } from './warning/warning.component';
const routes: Routes = [
    { path: '', redirectTo: 'warining', pathMatch: 'full' },
    { path: 'warining', component: WarningComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperimentRoutingModules { }
