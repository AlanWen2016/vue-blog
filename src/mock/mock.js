import Mock from 'mockjs';//es6语法引入mock模块
import tableAPI from './table'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})
// export default Mock.mock('http://laravel-blog.com', {//输出数据
//
//     'name': '@name',//随机生成姓名
//
//     'age|1-10': 10
//
//     //还可以自定义其他数据
// });

Mock.mock(/\/user\/listpage/, 'get', tableAPI.getUserList)
Mock.mock('http://laravel-blog.com/user/info', 'get', tableAPI.getUserList)
Mock.mock(/\/user\/remove/, 'get', tableAPI.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', tableAPI.batchremove)
Mock.mock(/\/user\/add/, 'get', tableAPI.createUser)
Mock.mock(/\/user\/edit/, 'get', tableAPI.updateUser)
export default Mock
