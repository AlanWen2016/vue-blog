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
                    component : () => import(/* webpackChunkName: "pages/user" */'../pages/user/uesr.vue'),
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
            component : () => import(/* webpackChunkName: "pages/layout" */'../pages/layout/layout.vue'),
            meta : { keepAlive: false, title:'首页',noTpl:true},
            children: [
                {
                    path: '/',
                    component : () => import(/* webpackChunkName: "pages/home/" */'../pages/blog/index.vue'),
                    meta : { keepAlive: false, title:'首页',noTpl:true},
                    children: [
                        {
                            path: '/',
                            name: 'blog-list',
                            component : () => import('../pages/blog/blogList.vue'),
                            meta : { keepAlive: false, title:'内容列表',noTpl:true},
                        },
                        {
                            path: '/blog/detail',
                            name: 'blog-detail',
                            component : () => import('../pages/blog/blogDetail.vue'),
                            meta : { keepAlive: false, title:'内容详情',noTpl:true},
                        }
                    ]
                },
                {
                    path: '/create',
                    name : 'home-create',
                    component : () => import('../pages/blog/create.vue'),
                    meta : { keepAlive: false, title:'内容添加',noTpl:true},

                }
            ]

        }
    ]
}
