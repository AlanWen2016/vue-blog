export default {
    pass: 0,
    unknowError: 10000, // 未知错误
    paramsError: 10002, //参数错误
    dbError: 10003, //数据库错误
    serverError: 10004, //服务器异常
    illegalityRequest: 10005, //非法请求
    moreRequest: 10006, //操作过于频繁

    loginFail : 20001,//登录失败
    noLogin   : 20002,//未登录
    noTglUser : 30000,//不是tgl用户
    noJoin    : 30001,//不能参与活动
    userVerifyNull    : 30025,//用户认证未提交
    userVerifyApprove: 30026,//用户认证审核中
    userVerifyReject    : 30027,//用户认证被驳回
    noActivity : 60000,//活动不存在
    // emptyActivity : 10002,//参数错误
    expiredActivity : 60001,//活动不在有效期内
}
