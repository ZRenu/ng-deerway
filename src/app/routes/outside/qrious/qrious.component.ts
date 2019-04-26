import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-qrious',
  templateUrl: './qrious.component.html',
  styleUrls: ['./qrious.component.less']
})
export class QriousComponent implements OnInit {
  types = ['url', 'email', 'tel'];
  value = 'https://zhourenyou.com/';
  type = 'url';
  qr: any;
  constructor() { }

  ngOnInit() {
    this.qri();
  }
  /** 初始化二维码 */
  qri() {
    const QRious = require('qrious');
    this.qr = new QRious({
      element: document.getElementById('qr'),
      value: this.value
    });
  }
  change(t: string) {
    this.type = t;
    switch (t) {
      case 'url':
        this.value = 'https://zhourenyou.com/';
        break;
      case 'email':
        this.value = 'mailto:zry2510@163.com';
        break;
      case 'tel':
        this.value = 'tel:8300000000';
        break;
    }
    this.qr.value = this.value;
  }

}
