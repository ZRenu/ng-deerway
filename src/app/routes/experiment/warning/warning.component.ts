import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.less']
})
export class WarningComponent implements OnInit {

  constructor() { }
  data = [
    {
      time: '2019-1-16 10:09',
      message: '实验中心·数据监控报警1'
    },
    {
      time: '2019-1-16 10:09',
      message: '实验中心·数据监控报警2'
    },
    {
      time: '2019-1-16 10:09',
      message: '实验中心·数据监控报警3'
    },
    {
      time: '2019-1-16 10:09',
      message: '实验中心·数据监控报警4'
    },
    {
      time: '2019-1-16 10:09',
      message: '实验中心·数据监控报警5'
    },
  ];

  ngOnInit() {
    this.start();
  }
  start() {
    const warning = document.getElementById('warning');
    const main = document.getElementById('main');
    warning.style.width = window.innerWidth + 'px';
    warning.style.height = window.innerHeight + 'px';
    main.style.height = (window.innerHeight - 50) + 'px';
    warning.style.width = window.innerWidth + 'px';
  }
  close(num) {
    this.data.splice(num, 1);
    if (this.data.length === 0) {
      for (let i = 0; i < 2; i++) {
        this.data.push(
          {
            time: '2019-1-16 10:09',
            message: '新增实验中心·数据监控报警'
          }
        );
      }
    }
  }
}
