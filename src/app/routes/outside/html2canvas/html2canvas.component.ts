import { Component, OnInit } from '@angular/core';

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

  }

}
