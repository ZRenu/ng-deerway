import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dw-table-dynamic',
  templateUrl: './dw-table-dynamic.component.html',
  styleUrls: ['./dw-table-dynamic.component.less']
})
export class DwTableDynamicComponent implements OnInit, OnChanges {

  constructor() { }
  allChecked = false;
  dataChecked = [];
  @Input() tableDatas;
  @Output() checked = new EventEmitter<object>();
  @Output() checkedSingle = new EventEmitter<object>();
  @Output() switch = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();
  @Output() editData = new EventEmitter<object>();
  @Output() page = new EventEmitter<number>();
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.tableDatas.checked || this.tableDatas.checkedSingle) {
      this.dataChecked = [];
      const lth = this.tableDatas.itemLength;
      for (let i = 0; i < lth; i++) {
        this.dataChecked.push({ checked: false, id: i });
      }
    }
  }
  refreshStatus(i): void {
    this.allChecked = this.dataChecked.every(e => e.checked === true);
    this.checkEmit();
  }
  refreSingle(i) {
    this.dataChecked.filter(e => e.id !== i)
      .forEach(_e => _e.checked = false);
    this.checkedSingle.emit(i);
  }
  checkAll(): void {
    this.dataChecked.forEach(e => {
      e.checked = !e.checked;
    });
    this.checkEmit();
  }
  checkEmit() {
    const ids = [];
    if (this.dataChecked.some(e => e.checked) === true) {
      this.dataChecked.filter(e => e.checked === true)
        .forEach(_e => {
          ids.push(_e.id);
        });
    }
    this.checked.emit(ids);
  }
  changeSwitch(e) {
    this.switch.emit(e);
  }
  edit(e) {
    this.editData.emit(e);
  }
  confirm(e) {
    this.delete.emit(e);
  }
  cancel() {

  }
  refreshData($event) {
    this.page.emit($event);
  }
}
/**
 * itemLength: 当前也数据量
 * title: 表格标题
 * footer：表格底部
 * loading： 加载中
 * bordered：是否展示外边框和列边框
 * checked：多选框
 * checkedSingle：单选框
 * dataTh：表头
 * dataSet：数据
 * tdItem：数据项名
 * switch：状态
 * switchName：状态字段名
 * size：表格大小
 * total：数据总理，用于分页
 * pagination：是否开启分页
 * pageSize：每页数据
 * pageIndex：当前页
 */
export interface DwDynamicTable {
  itemLength?: number;
  title?: string;
  footer?: string;
  loading?: boolean;
  bordered?: boolean;
  checked?: boolean;
  checkedSingle?: boolean;
  dataTh?: any;
  dataSet?: any;
  tdItem?: any;
  switch?: boolean;
  size: string;
  total?: number;
  switchName?: string;
  pagination?: boolean;
  pageSize?: number;
  pageIndex?: number;
}
