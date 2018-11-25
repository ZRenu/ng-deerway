import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
import { DwInfoModelComponent } from './meta/dw-info-model/dw-info-model.component';
import { DwSearchComponent } from './meta/dw-search/dw-search.component';
import { DwDatePickerComponent } from './meta/dw-date-picker/dw-date-picker.component';
import { DwTableComponent } from './meta/dw-table/dw-table.component';
const COMPONENTS = [
  DwTableComponent,
  DwInfoModelComponent,
  DwSearchComponent,
  DwDatePickerComponent
];
const SHAREDS = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  NgxEchartsModule,
];
@NgModule({
  imports: [
    ...SHAREDS,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
