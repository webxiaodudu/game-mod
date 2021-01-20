import request from '@/utils/request'

function getBannerListApi(option){
    //获取banner焦点图
    return request.get('/getBannerList',{params:option})
}

function getPCHotApi(option){
    //获取热门单机推荐
    return request.get('/getPcHotList',{params:option})
}

function getModListApi(option){
    //获取MOd热门列表
    return request.post('/getModhotList',option)
}
export {
    
    getBannerListApi,
    getPCHotApi,
    getModListApi
}