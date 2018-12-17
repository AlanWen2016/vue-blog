import axios from 'axios';


// 获取用户信息
export const UserInfo = () => axios.get(`/user/info`);
