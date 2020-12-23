import request from '@/utils/request'

//注册接口
export function registerApi(option){
    return request.post('/register',option);
}
