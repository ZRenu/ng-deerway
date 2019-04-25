import { Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {
  @ViewChild('treeCom') treeCom;
  searchValue: any;
  nodes = [
    {
      title: '安装工单',
      key: '100',
      expanded: true,
      children: [
        { title: '安装工单', key: '1001', icon: 'anticon anticon-meh-o', isLeaf: true },
      ]
    },
    {
      title: 'NB烟感数据',
      key: '101',
      expanded: true,
      children: [
        { title: '报警数据', key: '1002', icon: 'home', isLeaf: true },
        { title: '设备自检', key: '1003', icon: 'exception', isLeaf: true },
        { title: '设备故障', key: '1004', icon: 'setting', isLeaf: true },
        { title: '设备心跳', key: '1005', icon: 'smile', isLeaf: true },
      ]
    }
  ];
  title = '安装工单';

  constructor() { }

  ngOnInit() {
  }
  nzEvent(event: NzFormatEmitEvent): void {
    this.title = event.node.title;
    const key = event.keys;
    console.log(this.treeCom.getSelectedNodeList());
  }
  searchNode(event: NzFormatEmitEvent): void {
    console.log(event, this.treeCom.getMatchedNodeList().map(v => v.title));
  }
}
