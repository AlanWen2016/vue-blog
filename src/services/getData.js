import axios from './axios';
import qs from 'qs';
import { urlPrefix } from './config.js';


// 获取用户信息
export const UserInfo = () => axios.get(`${urlPrefix}/user/info`);
export const AccountRegister = (params) => axios.post(`${urlPrefix}/user/register`,params);
export const AccountLogin = (params) => axios.post(`${urlPrefix}/user/login`,params);

export const BlogList = (params) => axios.get(`${urlPrefix}/blog/list`, params);

//新增内容模块
export const saveBlog = (params) => axios.post(`${urlPrefix}:8080/blog/saveBlog`,qs.stringify(params))
