import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'list-table', pathMatch: 'full' },
    { path: 'list-table', component: TableListComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
