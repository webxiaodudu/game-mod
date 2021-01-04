import request from '@/utils/request'

//注册接口
export function registerApi(option){
    return request.post('/register',option);
}

//注册验证基本信息是否已被注册
export function checkRegisterInfoApi(option){
    return request.post('/checkRegisterInfo',option)
}