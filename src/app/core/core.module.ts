import { NgModule } from '@angular/core';
import { DwTableComponent } from './meta/dw-table/dw-table.component';
import { SharedModule } from '../shared/shared.module';
import { DwInfoModelComponent } from './meta/dw-info-model/dw-info-model.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DwTableComponent,
    DwInfoModelComponent
  ],
  exports: [
    DwTableComponent,
    DwInfoModelComponent
  ]
})
export class CoreModule { }
