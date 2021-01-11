import request from '@/utils/request'
function getBannerListApi(option){
    return request.get('/getBannerList',{params:option})
}

export {
    getBannerListApi
}