import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Html2canvasComponent } from './html2canvas/html2canvas.component';
import { QriousComponent } from './qrious/qrious.component';
const routes: Routes = [
    { path: '', redirectTo: 'html2canvas', pathMatch: 'full' },
    { path: 'html2canvas', component: Html2canvasComponent },
    { path: 'qrious', component: QriousComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutsideRoutingModules { }
