import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      text: '首页',
      link: 'index',
      icon: 'anticon anticon-home',
      children: []
    },
    {
      text: '图表',
      link: '',
      icon: 'anticon anticon-line-chart',
      children: [
        {
          text: '折线图',
          link: 'charts/line',
          icon: '',
        }
      ]
    },
    {
      text: '列表页',
      link: '',
      icon: 'anticon anticon-appstore-o',
      children: [
        {
          text: '查询表格',
          link: 'list/list-table',
          icon: '',
        }
      ]
    },
    {
      text: '百度地图',
      link: '',
      icon: 'anticon anticon-environment-o',
      children: [
        {
          text: '开始',
          link: 'map/start',
          icon: '',
        },
        {
          text: '地图标点',
          link: 'map/marker',
          icon: '',
        },
      ]
    }
  ];
  menus() {
    return this._Menus;
  }
}
/** 菜单类：待用 */
export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** 路由 */
  link?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 二级菜单 */
  children?: Menu[];
}
