# 鹿途后台管理系统
## 准备工作
* 安装 angular 环境
* 安装 ng-zorro 依赖

## 开始

### 创建项目
`
ng new ng-web --style less
`

`
cd ng-web
`
### 初始化配置
`
ng add ng-zorro-antd
`
### 安装组件   
`
npm install ng-zorro-antd --save
`
### 用户认证

[@delon/auth](https://ng-alain.com/auth/getting-started)

### 权限控制

[@delon/acl](https://ng-alain.com/acl/getting-started/zh)

## 第三方资源

图标：[iconfont](http://iconfont.cn)

## 项目结构

> * core    一些通用服务，公共组件和管道以及通用验证
> * layout   通用模版
> * routes   项目主体内容
> * shared   导入导出项目公用的第三方引用
> * utils    项目工具合集
> * styles   通用样式
> * assets   图片与图标

## 运行

`ng s -c [environment] --port [port]`

## 项目说明

NG大法好