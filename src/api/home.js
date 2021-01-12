import request from '@/utils/request'

function getBannerListApi(option){
    //获取banner焦点图
    return request.get('/getBannerList',{params:option})
}

function getPCHotApi(option){
    //获取热门单机推荐
    return request.get('/getPcHotList',{params:option})
}

export {
    
    getBannerListApi,
    getPCHotApi
}