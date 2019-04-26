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
      icon: 'home',
      children: []
    },
    {
      text: '图表',
      link: '',
      icon: 'line-chart',
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
      icon: 'appstore',
      children: [
        {
          text: '基础表格',
          link: 'list/list-table',
          icon: '',
        },
        {
          text: '动态控制表格',
          link: 'list/dynamic-table',
          icon: '',
        },
        {
          text: '菜单管理',
          link: 'list/tree',
          icon: '',
        }
      ]
    },
    {
      text: '动画剧场',
      link: '',
      icon: 'bank',
      children: [
        {
          text: '动画示例',
          link: 'animations/animation',
          icon: '',
        }
      ]
    },
    {
      text: '百度地图',
      link: '',
      icon: 'compass',
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
    },
    {
      text: '插件工坊',
      link: '',
      icon: 'usb',
      children: [
        {
          text: '表单打印',
          link: 'outside/html2canvas',
          icon: '',
        },
        {
          text: '二维码',
          link: 'outside/qrious',
          icon: '',
        }
      ]
    },
    {
      text: '全屏中心',
      link: '',
      icon: 'experiment',
      children: [
        {
          text: 'Demo',
          link: '/fullscreen/experiment/demo',
          icon: '',
        },
        {
          text: '设备报警',
          link: '/fullscreen/experiment/warining',
          icon: '',
        }
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
