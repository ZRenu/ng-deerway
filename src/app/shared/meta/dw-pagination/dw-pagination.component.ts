import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dw-pagination',
  templateUrl: './dw-pagination.component.html',
  styleUrls: ['./dw-pagination.component.less']
})
export class DwPaginationComponent implements OnInit {

  constructor() { }
  @Input() tableDatas;
  @Output() pageIndex = new EventEmitter<number>();
  currentPage = 1;
  ngOnInit() {
    this.currentPage = this.tableDatas.pageIndex;
  }
  refreshStatus() {
    this.pageIndex.emit(this.currentPage);
  }
}
