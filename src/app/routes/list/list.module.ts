import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { CoreModule } from '../../core/core.module';
import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule,
    CoreModule
  ],
  declarations: [TableListComponent, TableDynamicComponent, TreeComponent]
})
export class ListModule { }
