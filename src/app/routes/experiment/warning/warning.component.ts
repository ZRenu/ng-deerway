import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.less']
})
export class WarningComponent implements OnInit {
  ws: WebSocket; // 定义websocket
  value;
  constructor(
    private notification: NzNotificationService
  ) { }
  data = [];

  ngOnInit() {
    this.start();
    // this.webSocket();
    // this.connectWs();
  }
  send() {
    this.ws.send(this.value);
  }
  connectWs() {
    console.log('开启服务');
    if (this.ws != null) { this.ws.close(); }
    // this.ws = new WebSocket('ws://localhost:9998/echo');
    const url = 'ws://192.168.1.89:1300/ws/smokeWebSocketServer/ec194e2d6a924820a80fa11cf6728d82/824f9d03649347998a2fa42797449850';
    this.ws = new WebSocket(url);
    const that = this;
    this.ws.onopen = function (event) {
      // socket 开启后执行，可以向后端传递信息
      // alert('数据发送中...');
    };
    this.ws.onmessage = function (event) {
      console.log('event', event.data);
      for (let i = 0; i < Number(event.data); i++) {
        if (that.data.length < 5) {
          that.data.push(
            {
              time: '2019-1-16 10:09',
              message: Math.random()
            },
          );
        }
      }
      console.log('data', that.data);
    };
    this.ws.onerror = function (event) {
      // socket error信息

    };
    this.ws.onclose = function (event) {
      // socket 关闭后执行
      alert('连接已关闭...');
    };
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
  }
}
