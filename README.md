# vue-blog
Simple blog base on Vue.js and Element UI
## 项目目录说明

```
.
│── build/                                       // 基本配置
│   ├── default.js                                // 默认配置
│   ├── base.js                                   // 基础配置
│   ├── dev.js                                    // 开发环境配置
│   └── dist.js                                   // 构建任务配置
|—— dist/                                         //webpack 构建输出的目录
├── src/                                          // 源码目录
│   ├── components/                               // 组件
│   │     ├── left/
│   │     ├── footer/
│   │     └── header/
│   ├── pages/                                     // 页面
│   ├── libs/                                    // 编写的公共库
│   ├── assets/                                  // 资源文件，css，图片，字体等
│   ├── service/                                  // 数据交互统一调用与后台接口通信
│   ├── stores/                                   // vuex的状态管理
│   ├── router/                                    // 路由
|   |—— directives/                               //自定义指令
|   |—— filters/                                  //vue 过滤器
│   ├── App.vue                                   // 页面入口文件
│   └── main.js                                   // 程序入口文件，加载各种公共组件
├── favicon.ico                                   // 图标
├── index.html                                    // 入口html文件
.
```
### 项目安装

```
git clone https://github.com/AlanWen2016/vue-blog.git
cd vue-blog
```
### 本地开发
```
npm install && npm run dev
```

### 项目构建
```
npm run build
```