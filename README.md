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

##页面开发步骤：
1、在src/pages 文件夹下简历相应的目录
    1.2、如需求 创建目录demand
    1.3、创建页面 index.vue
    ```
    `
    <template>
    <div>
    <left></left>
    <head-top></head-top>
  	<section class="mainbody">
      //页面内容在这里begin
        <div class="content">
            <h1>腾讯游戏玩家联盟-需求页面</h1>
            
        </div>
    //页面内容end        
    </section>
    <foot></foot>
    </div>
    </template>
    // 引入 需要的样式，注意这三个样式已经在app.vue 里引入无需重复引入
    <style src="./assets/vendor/bootstrap/css/bootstrap.min.css"></style>
    <style src="./assets/vendor/jstree/themes/tgl/style.css"></style>
    <style src="./assets/css/app.css"></style>
    <script>
    //引入头部组件、左侧组件、尾部组件。
    import headTop from '../../components/header/head.vue';
    import left from '../../components/left/left.vue';
    import foot from '../../components/footer/foot.vue';
    //定义 vue 对象属性
    export default {
        data(){
            return{
                
            }
        },

        mounted(){
            
        },
        // 注册引入的组件
        components:{
            headTop,
            left,
            foot
        },

        computed:{
            
        },

        methods:{
            //点击图标刷新页面
            reload(){
                window.location.reload();
            }
        },
    }
    </script>
·
···
2、配置路由 src/router/router.js 文件
···
import homeIndex from '../pages/home/index.vue';
export default {
    routes : [
        {
            path : '/',
            redirect : '/home'
        },
        {
            path : '/home',
            component : homeIndex
        },
        // 新建路由对象，既可以
        {
            path : '/demand/index',
            component : () => import(/* webpackChunkName: "pages/demand/index" */'../pages/demand/index.vue')
        }
    ]
}
···
3、后台接口调用使用axios 
目录src/services/getData.js，注释如果后台接口多 可以加自己的目录 如 src/services/demand/getData.js
例如:获取用户信息
```
import axios from 'axios';
import { urlPrefix } from './config.js';
// 设置头部信息
// axios.defaults.headers.common['x-requested-with'] = 'XMLHttpRequest';
// 获取用户信息 接口地址为urlPrefix+ '接口path'。
export const UserInfo = () => axios(`${urlPrefix}/user/info`);
```
4、接口使用
参考：src/pages/home/index.vue
```
//导入要使用的方法
import {UserInfo} from 'Services/getData.js';
export default {
    data(){
        return{
            
        }
    },
    components:{
        headTop,
        left,
        foot
    },

    computed:{
         
    },

    methods:{
        //点击图标刷新页面
        reload(){
            //window.location.reload();
            this.getData();
        },
        // es8 里的 async await 语法使用
        async getData(){
            let res = await UserInfo();
            console.log(res.data);
        }
    },
}
</script>
```
5 、新加接口时需要在build/dev.js 里加代理路径否则会出现跨域问题
仅添加接口的一级路径+/** 即可
···
  devServer:{
        proxy:[
            {
                path: [
                    '/home/**',
                    '/user/**',
                    '/demand/**'
                ],
                target: 'http://new.dev.tgl.oa.com', // target host
                changeOrigin: true
            }
        ],
    },
···