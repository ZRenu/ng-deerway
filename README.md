# 鹿途后台管理系统
## 准备工作
* 安装 angular 环境
* 安装 ng-zorro 依赖

## 演示地址(非实时更新)

[DEMO](https://zhourenyou.github.io/web-deerway/)

> * ECharts
> * 百度地图
#### ng-zorro组件二次封装(app/core/meta)
> * 基础表格组件 dw-table
> * 通用时间组件 dw-date-picker
> * 通用搜索组件 dw-search
> * 信息模态框 dw-info-model

## 项目说明

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

> * core ng-zorro组件二次封装 通用服务、管道以及通用验证
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

## 部署

#### 1、打包

`
ng build --pord
`
#### 2、配置WEB服务服务器
[nginx](http://www.nginx.cn/doc/)

#### 3、推送资源

`
scp -r  打包后文件地址 root@服务器IP地址：/root/www
`
#### 4、域名解析，发布完成