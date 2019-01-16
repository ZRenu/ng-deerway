import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './full/full.component';

const routes: Routes = [
    { path: '', redirectTo: 'full', pathMatch: 'full' },
    { path: 'full', component: FullComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScreenRoutingModule { }
