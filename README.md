# 鹿途后台管理系统
## 准备工作
* 安装 angular 环境
* 安装 ng-zorro 依赖

## 演示地址(非实时更新)

[DEMO](https://zhourenyou.github.io/web-deerway/)

## 项目说明

中小型后台管理系统，项目集成包括百度地图,EChats等功能，项目不断更新中。

## 开始

### 创建项目
`
ng new ng-deerway --style less
`

`
cd ng-deerway
`
### 初始化配置
`
ng add ng-zorro-antd
`
### 安装组件   
`
npm install ng-zorro-antd --save
`
## 运行

`ng s -c [environment] --port [port]`

## 项目结构

> * core 一些通用服务公共组件和管道以及通用验证
> * layout   通用模版
> * routes   项目主体内容
> * shared   导入导出项目公用的引用
> * utils    项目工具合集
> * styles   通用样式
> * assets   静态资源（图片与图标）

### 用户认证

[@delon/auth](https://ng-alain.com/auth/getting-started)

### 权限控制

[@delon/acl](https://ng-alain.com/acl/getting-started/zh)

## 第三方资源

图标：[iconfont](http://iconfont.cn)

地图：[angular-baidu-maps](https://github.com/cipchk/angular-baidu-maps)

图表：[echarts](http://echarts.baidu.com/index.html)

#### 引入echarts

1、命令行下载

`
npm install echarts --save
`

`
npm install ngx-echarts --save
`

2、angular.json配置echarts路径(projects - architect - build - scripts)

`
node_modules/echarts/dist/echarts.min.js
`

3、模块中引用

`
import { NgxEchartsModule } from 'ngx-echarts';
`
