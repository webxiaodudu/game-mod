import request from '@/utils/request'

export function loginApi(option){
    return request.post('/login',option);
}