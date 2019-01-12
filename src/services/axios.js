import axios from 'axios';

axios.defaults.withCredentials=true;

// 设置拦截器
axios.interceptors.response.use((res) => {
    //未登录去登录
    return res;
    }, (err) => {
    switch (err.response.status)
    {
        case 401:// 返回401

            return;
        case 403://返回403 表示无权访问

            return;
    }
    return Promise.reject(err);
});
export default axios;
