import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-html2canvas',
  templateUrl: './html2canvas.component.html',
  styleUrls: ['./html2canvas.component.less']
})
export class Html2canvasComponent implements OnInit {
  style = 'wrap-1';
  styles = [
    { value: 'wrap-1', label: '样式1' },
    { value: 'wrap-2', label: '样式2' },
  ];
  data = [
    {
      rank_change: 0,
      writer_name: '斗破苍穹',
      opus: '天蚕土豆',
      rank: 9.8
    },
    {
      rank_change: 1,
      writer_name: '将夜',
      opus: '猫腻',
      rank: 8.8
    },
    {
      rank_change: null,
      writer_name: '盗墓笔记',
      opus: '南派三叔',
      rank: 9
    },
    {
      rank_change: 3,
      writer_name: '圣墟',
      opus: '辰东',
      rank: 8.7
    },
    {
      rank_change: 0,
      writer_name: '飞剑问道',
      opus: '我吃西红柿',
      rank: 8.6
    },
    {
      rank_change: 0,
      writer_name: '全职法师',
      opus: '乱',
      rank: 8.5
    },
    {
      rank_change: null,
      writer_name: '明朝败家子',
      opus: '上山大老虎额',
      rank: 8
    },
    {
      rank_change: 5,
      writer_name: '元尊',
      opus: '天蚕土豆',
      rank: 6.5
    },
    {
      rank_change: 0,
      writer_name: '伏天氏',
      opus: '净无痕',
      rank: 6.3
    },
    {
      rank_change: 0,
      writer_name: '逆天邪神',
      opus: '火星引力',
      rank: 6
    }
  ];
  canvasImg: '';
  constructor() { }

  ngOnInit() {
  }
  saveImgLocal() {
    const shareContent = document.getElementById('wrap'); // 需要截图的包裹的（原生的）DOM 对象
    const width = shareContent.offsetWidth; // 获取dom 宽度
    const height = shareContent.offsetHeight; // 获取dom 高度
    const canvas = document.createElement('canvas'); // 创建一个canvas节点
    const scale = 2; // 定义任意放大倍数 支持小数
    canvas.width = width * scale; // 定义canvas 宽度 * 缩放
    canvas.height = height * scale; // 定义canvas高度 *缩放
    canvas.getContext('2d').scale(scale, scale); // 获取context,设置scale
    const opts = {
      scale: scale, // 添加的scale 参数
      canvas: canvas, // 自定义 canvas
      logging: true, // 日志开关
      width: width, // dom 原始宽度
      height: height, // dom 原始高度
      useCORS: true // 【重要】开启跨域配置
    };
    // tslint:disable-next-line:no-shadowed-variable
    html2canvas(shareContent, opts).then((canvas: any) => {
      this.canvasImg = canvas.toDataURL('image/png');
      this.downloadFile('导出图片', this.canvasImg);
    });

  }
  // filename: 文件名称， content: canvas图片流地址
  downloadFile(filename, content) {
    const base64Img = content;
    const oA = document.createElement('a');
    oA.href = base64Img;
    oA.download = filename;
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    oA.dispatchEvent(event);
  }
  download() {
    this.downloadFile('导出图片', this.canvasImg);
  }


}
