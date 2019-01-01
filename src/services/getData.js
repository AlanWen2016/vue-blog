import axios from './axios';
import { urlPrefix } from './config.js';


// 获取用户信息
export const UserInfo = () => axios.get(`${urlPrefix}/user/info`);
export const AccountRegister = (params) => axios.post(`${urlPrefix}/user/register`,params);
export const AccountLogin = (params) => axios.post(`${urlPrefix}/user/login`,params);

export const BlogList = (params) => axios.get(`${urlPrefix}/blog/list`, params);
