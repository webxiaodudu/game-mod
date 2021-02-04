import axios from 'axios';
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const request = axios.create({
    timeout: 20000,
});

request.interceptors.request.use(function (config) {
    //判断是否有token有的话加上token
   
    let Authorization = localStorage.getItem('jwt')
    
    if (Authorization) {
      
      config.headers.Authorization ='Bearer '+ Authorization;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log(error,' --a')
    return Promise.reject(error);
  });


export default  request