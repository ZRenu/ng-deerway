import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dw-search',
  templateUrl: './dw-search.component.html',
  styleUrls: ['./dw-search.component.less']
})
export class DwSearchComponent implements OnInit {
  @Input() searchData;
  @Output() searchvalue = new EventEmitter<string>();
  /**屏幕尺寸 */
  resize = document.body.clientWidth;
  inputValue: string;
  constructor(
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    /**监听浏览器的变化 */
    fromEvent(window, 'resize')
      .subscribe((e) => {
        this.resize = e.currentTarget['innerWidth'];
      });
  }
  searchCollapsed() {
    if (this.inputValue === undefined || this.inputValue === '') {
      this.notification.create('warning', '系统提示',
        '请输入搜索内容', { nzDuration: 1000 });
    } else {
      this.searchvalue.emit(this.inputValue);
    }
  }

}
/**
 * 搜索选项配置信息:
 *
 * placeholder 提示信息
 *
 * nzSize:large default small 大小
 */
export interface SearchData {
  placeholder?: string;
  nzSize?: string;
}
