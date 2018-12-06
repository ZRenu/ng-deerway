import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';

const routes: Routes = [
    { path: '', redirectTo: 'list-table', pathMatch: 'full' },
    { path: 'list-table', component: TableListComponent },
    { path: 'dynamic-table', component: TableDynamicComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
