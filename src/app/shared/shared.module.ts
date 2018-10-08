import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
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
    ...SHAREDS
  ],
  declarations: [],
  exports: [
    ...SHAREDS
  ]
})
export class SharedModule { }
