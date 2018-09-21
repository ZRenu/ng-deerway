import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      text: 'User',
      link: '',
      icon: 'anticon anticon-user',
      children: [
        {
          text: 'Tom',
          link: '',
          icon: ''
        },
        {
          text: 'Bill',
          link: '',
          icon: ''
        },
        {
          text: 'Alex',
          link: '',
          icon: ''
        }
      ]
    },
    {
      text: 'Team',
      link: '',
      icon: 'anticon anticon-team',
      children: [
        {
          text: 'Team 1',
          link: '',
          icon: '',
        },
        {
          text: 'Team 2',
          link: '',
          icon: '',
        }
      ]
    },
    {
      text: 'File',
      link: '',
      icon: 'anticon anticon-file',
      children: []
    },
    {
      text: 'TeamOne',
      link: '',
      icon: 'anticon anticon-team',
      children: [
        {
          text: 'Team 1',
          link: '',
          icon: '',
        },
        {
          text: 'Team 2',
          link: '',
          icon: '',
        }
      ]
    },
    {
      text: 'FileOne',
      link: '',
      icon: 'anticon anticon-file',
      children: []
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
