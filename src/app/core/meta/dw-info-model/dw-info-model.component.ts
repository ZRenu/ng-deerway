import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dw-info-model',
  templateUrl: './dw-info-model.component.html',
  styleUrls: ['./dw-info-model.component.less']
})
export class DwInfoModelComponent implements OnInit {
  @Input() isVisible;
  @Input() nzTitle;
  @Output() showInfoModel = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  handleOk(): void {
    this.showInfoModel.emit('false');
  }

  handleCancel(): void {
    this.showInfoModel.emit('false');
  }
}
