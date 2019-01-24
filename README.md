### 前端项目说明

#### 1. 使用的技术栈：
- [webpack](https://doc.webpack-china.org/)
- [Vue2](https://cn.vuejs.org/v2/guide/)
- [Vuex](https://vuex.vuejs.org/zh-cn/)
- [Vue-router](https://router.vuejs.org/zh-cn/)
- [Axios](https://github.com/mzabriskie/axios)
- [Element](http://element.eleme.io/#/zh-CN/component/installation)
- [ES6](http://es6.ruanyifeng.com/)

#### 2. 开发环境
前端代码需要运行在Node环境下，Nodejs可从[官网](https://nodejs.org/zh-cn/)进行下载安装

安装完成后，Node自身会自带npm包管理器（国内推荐使用淘宝镜像[cnpm](https://npm.taobao.org/)）

从[gitlab](http://172.16.201.101:8888/gismanager/GISManager-frontend)上拉去最新的前端代码

在项目的根目录下运行cmd：

第一次运行需要安装依赖包
```
npm install
```
安装完依赖包后，运行`run`命令进入开发环境
```
npm run dev
```
开发环境端口号为`8080`

运行`build`命令进行项目的打包
```
npm run build
```

项目打包会输出到`dist/`文件夹

### 3. 项目目录结构


```
├───dist                                       # 项目打包输出文件
├───config                                     # 环境运行配置文件
├───src
│   ├── components                                  # 存储封装组件
│   ├──  css                                        # 外部引入 css 文件
│   ├──  page                                       # vue-loader (单页面文件)
│   ├──  router                                     # vue-router (路由配置)
│   ├──  store                                      # vuex （存储公用数据、方法）
│   ├──  App.vue                                    # vue 目录结构
│   └── main.js                                     # vue 渲染文件
│
├── index.html                                 # 项目入口
│
└── package.json                               # 配置文件（依赖包，项目配置信息）

```
