import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class SharedModule { }
