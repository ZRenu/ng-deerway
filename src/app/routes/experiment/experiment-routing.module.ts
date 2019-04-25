import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningComponent } from './warning/warning.component';
import { DemoComponent } from './demo/demo/demo.component';
const routes: Routes = [
    { path: '', redirectTo: 'warining', pathMatch: 'full' },
    { path: 'warining', component: WarningComponent },
    { path: 'demo', component: DemoComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperimentRoutingModules { }
