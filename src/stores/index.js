// store实例入口
import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters';

Vue.use(Vuex);
const state = {
    userInfo: {},
    status : {
        //是否登录
        login : false,
        allowAccess : false,
    },

};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
