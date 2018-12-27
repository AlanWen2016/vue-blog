import axios from './axios';
import { urlPrefix } from './config.js';


// 获取用户信息
export const UserInfo = () => axios.get(`${urlPrefix}/user/info`);
export const AccountLogin = (params) => axios.post(`${urlPrefix}/user/login`, params);
