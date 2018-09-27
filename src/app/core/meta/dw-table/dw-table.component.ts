import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dw-table',
  templateUrl: './dw-table.component.html',
  styleUrls: ['./dw-table.component.less']
})
export class DwTableComponent implements OnInit {
  dwData = {};
  @Input() tableDatas;
  @Input() nzTitle;
  @Output() dwTables = new EventEmitter<object>();
  @Output() deleteTb = new EventEmitter<object>();
  @Output() editTb = new EventEmitter<object>();
  @Output() sortData = new EventEmitter<object>();

  ngOnInit() {
  }
  /**过滤内容 */
  filter(listOfSearchName: string[]): void {
    this.dwData['listOfSearchName'] = listOfSearchName;
    this.dwTables.emit(this.dwData);
  }
  /**排序字段 */
  sort(sortName: string, value: string): void {
    this.dwData['sortName'] = sortName;
    this.dwData['sortValue'] = value;
    this.dwTables.emit(this.dwData);
  }
  /**编辑 */
  edit(data) {
    this.editTb.emit(data);
  }
  /**删除 */
  delete(data) {
    this.deleteTb.emit(data);
  }
  /**修改状态 */
  sortChange(sortName: string, value: string): void {
    this.sortData.emit({ 'name': sortName, 'value': value });
  }
}
/**
 * 基础表格配置信息
 *
 *  nzShowPagination 是否开启分页
 *
 *  nzShowAction 是否开启操作列
 *
 *  nzBordered 是否展示外边框和列边框
 *
 *  dataTh {
 *
 *  title:string 表格title
 *
 *  nzShowFilter:boolean 是否开启过滤
 *
 * nzFilters: [ { text: 'Jim', value: 'Jim' }]  过滤内容
 *
 * nzShowSort:boolean 是否开启排序
 *
 * nzSortKey: string 排序key
 *
 * sort 筛选状态名
 *
 * }
 *  sortMap 筛选状态
 *
 *  dataSet 表格数据
 */
export interface DwTable {
  nzShowPagination?: boolean;
  nzShowAction?: boolean;
  nzBordered?: boolean;
  nzTitle?: string;
  dataTh?: any;
  sortMap?: any;
  dataSet?: any;
}
