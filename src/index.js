import Vue from 'vue';
import App from './app.vue'
import VueRouter from 'vue-router'
import routerConfig from './router/router.js'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// 开启调试面板
Vue.config.devtools = true;
window.domain = 'alanwen.online';
document.domain = 'alanwen.online';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
const store = new Vuex.Store({
    state: {
        count: 0,
        msg:'imessage',
        login: true
    },
    mutations: {
        increment (state) {
            state.count++
        },
    decrement (state) {
      state.count--
    }
  }
})
store.commit('increment');
console.log(store.state.count,'store') // -> 1

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// const User = {
//   template: '<div>User {{$route.params.id}}</div>'
// }
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar },
//   { path: '/user/:id', component: User}
// ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter(
  routerConfig // (缩写) 相当于 routes: routes
)

// 路由守卫
router.beforeEach(async (to, from, next) => {
    // 未匹配规则，跳转到首页
    if (to.matched.length === 0) {
        location.href = `${document.location.protocol}// ${document.location.hostname}`;
        return;
    }
    // 登陆判断, 写入需要登陆
    if (!store.state.login && to.name == 'create') {
        await store.dispatch({type: 'getUserInfo'});
    }
    next();
});


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能


// 注册一个全局自定义指令 `v-focus`
// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
// Vue.directive('demo', function (el, binding) {
//   console.log(binding.value.color) // => "white"
//   console.log(binding.value.text)  // => "hello!"
// })
// const Counter = {
//   template: `<div>{{ count }}</div>`,
//   computed: {
//     count () {
//       return this.$store.state.count
//     }
//   }
// }


const app = new Vue({
    el : '#app',
    router : router,
    store: store,
    render : h => h(App)
})
