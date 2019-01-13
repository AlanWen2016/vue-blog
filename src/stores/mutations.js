import { SAVE_USER_INFO } from './mutation-types.js';
export default {
    // 保存用户信息
    [SAVE_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
        // 保存在回话中，刷新初始化state时可用
        state.status.login = true;
    },
}
