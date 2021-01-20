const KoaRouter = require('@koa/router')
const router = new KoaRouter()
const { SucessModel ,ErrorModel } = require('../model/index')

const { queryBannerList } = require('../controller/queryBanner')
const { queryPcHot } = require('../controller/querPcHot')
const {queryModList} = require('../controller/queryModList')
/**banner */
/**
 * url: /getBannerList
 * method:get
 * query:limit:string
 * 
 */
router.get('/getBannerList',async (ctx)=>{
   const { limit = '1'} = ctx.query
 
 
    try{
        const res = await queryBannerList(limit)||[]
        
        if(res.length){
           const list =res.map(item=>{
               item.img = '/static/banner/'+item.img
               return item
           })
            ctx.body=new SucessModel({list},'sucess')
        }
        else{
            ctx.body=new SucessModel({list:[]},'sucess')
        }
    }
    catch(error){
        ctx.body=new ErrorModel(error)
    }
     
   
})

/**PCHOT */
/**
 * url: /getPcHotList
 * method:get
 * query:limit:string
 * 
 */
router.get('/getPcHotList',async (ctx)=>{
    const {limit='0'}=ctx.query;
    try{
        const res = await queryPcHot(limit)||[]
        
        if(res.length){
           const list =res.map(item=>{
               item.cover = '/static/pcgame/'+item.cover
               return item
           })
            ctx.body=new SucessModel({list},'sucess')
        }
        else{
            ctx.body=new SucessModel({list:[]},'sucess')
        }
    }
    catch(error){
        ctx.body=new ErrorModel(error)
    }
     

})

/**ModHOT */
/**
 * url: /getModhotList
 * method:post
 * body:
 * {
 *  limit:number,
 *  type:string
 * }
 * 
 */

router.post('/getModhotList',async (ctx)=>{
    
    const { limit = 10, type='1' } = ctx.request.body;
    try {
        let list  = await queryModList(limit,type)
        list.forEach(item=>{
             item.cover = '/static/modgame/'+ item.cover
        })
        ctx.body= new SucessModel(list,'sucess')
    } catch (error) {
        ctx.body=new ErrorModel(error,'error')
    }
    
})

module.exports = router;