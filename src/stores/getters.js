export default {
    userBreif: state => {
        return state.userInfo;
    },
    avatar: state=>{
        return state.userInfo.avatar
    },
    nickName: state=>{
        return state.userInfo.nick_name
    },

}
