import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'info', component: InfoComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRoutingModule { }
