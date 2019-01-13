import { UserInfo } from 'Services/getData.js';
import {SAVE_USER_INFO} from "./mutation-types";
export default {
    async getUserInfo ({commit, state}) {
        let res = await UserInfo();
        if (res.status === 200 && res.data) {
            commit('SAVE_USER_INFO', res.data);
        }
        return res;
    },
};
