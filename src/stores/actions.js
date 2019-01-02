import { UserInfo } from 'Services/getData.js';
export default {
    async getUserInfo ({commit, state}) {
        let res = await UserInfo();
        if (res.status === 200 && res.data.code == 0 ) {
            commit('SAVE_USER_INFO', res.data.data);
        }
        return res;
    },

};
