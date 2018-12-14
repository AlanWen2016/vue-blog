export default {
    routes : [

        {
            path: '/user',
            name : 'user',
            component : () => import(/* webpackChunkName: "pages/layout" */'../pages/layout/layout.vue'),
            meta : { keepAlive: false, title:'首页',noTpl:true},
            redirect: '/user',
            children: [
                {
                    path: '/user',
                    name : 'user-user',
                    component : () => import(/* webpackChunkName: "pages/user/:id" */'../pages/user/uesr.vue'),
                    meta : { keepAlive: false, title:'用户管理',noTpl:true},
                },
                {
                    path: '/article',
                    name : 'article-article',
                    component : {template: '<div> article </div>'},
                    meta : { keepAlive: false, title:'图文管理',noTpl:true},
                }
            ]
        },
        {
            path: '/',
            name : 'home-index',
            component : () => import(/* webpackChunkName: "pages/layout" */'../pages/layout/layout.vue'),
            meta : { keepAlive: false, title:'首页',noTpl:true},
            children: [
                {
                    path: '/',
                    name : 'home-index',
                    component : () => import(/* webpackChunkName: "pages/home/" */'../pages/home/index.vue'),
                    meta : { keepAlive: false, title:'首页列表',noTpl:true},
                },
                {
                    path: '/blog/detail',
                    name : 'blog-detail',
                    component : () => import(/* webpackChunkName: "pages/blog/" */'../pages/blog/detail.vue'),
                    meta : { keepAlive: false, title:'内容详情',noTpl:true},
                },

            ]

        }
    ]
}
