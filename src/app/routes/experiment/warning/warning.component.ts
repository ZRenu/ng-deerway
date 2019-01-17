import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.less']
})
export class WarningComponent implements OnInit {
  ws: WebSocket; // 定义websocket
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
    // this.webSocket();
    this.connectWs();
  }
  connectWs() {
    if (this.ws != null) { this.ws.close(); }
    this.ws = new WebSocket('ws://localhost:9998/echo');
    const that = this;
    this.ws.onopen = function (event) {
      // socket 开启后执行，可以向后端传递信息
      that.ws.send('sonmething');
      alert('数据发送中...');
    };
    this.ws.onmessage = function (event) {
      // socket 获取后端传递到前端的信息
      that.ws.send('sonmething');
      const received_msg = event.data;
      // alert('数据已接收...');
      console.log('event', received_msg);

    };
    this.ws.onerror = function (event) {
      // socket error信息

    };
    this.ws.onclose = function (event) {
      // socket 关闭后执行
      alert('连接已关闭...');
    };
  }
  // webSocket() {
  //   // 打开一个 web socket
  //   const ws = new WebSocket('ws://localhost:9998/echo');
  //   ws.onopen = function () {
  //     // Web Socket 已连接上，使用 send() 方法发送数据
  //     ws.send('发送数据');
  //     alert('数据发送中...');
  //   };

  //   ws.onmessage = function (evt) {
  //     const received_msg = evt.data;
  //     alert('数据已接收...');
  //   };

  //   ws.onclose = function () {
  //     // 关闭 websocket
  //     alert('连接已关闭...');
  //   };

  // }
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
