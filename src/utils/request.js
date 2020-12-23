import axios from 'axios';
import Cookies from 'js-cookie'
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const request = axios.create({
    timeout: 20000,
});

axios.interceptors.request.use(function (config) {
    //判断是否有token有的话加上token
    let Authorization = Cookies.get('token');
    if (Authorization) {
      config.headers.Authorization = Authorization;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


export default  request