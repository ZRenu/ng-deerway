import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule,
    CoreModule
  ],
  declarations: [TableListComponent]
})
export class ListModule { }
