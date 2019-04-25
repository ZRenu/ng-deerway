import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit, AfterViewInit {
  seamless: any;
  width: '1740px';
  data = [];
  constructor() { }

  ngOnInit() {
    this.seamless = require('seamscroll');
    this.list();
  }
  list() {
    for (let index = 0; index < 5; index++) {
      this.data.push(
        { title: `2019-04-0${index} 12:23 设备编号XXXXXXXXXXXXXX  低温报警 ` }
      );
    }
  }
  start() {
    this.seamless.init({
      dom: document.getElementById('demo2'),
      direction: 2,
    });
  }
  ngAfterViewInit(): void {
    this.start();
  }
}
