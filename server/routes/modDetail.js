const KoaRouter = require('@koa/router')
const router = new KoaRouter()
const { SucessModel ,ErrorModel } = require('../model/index')

const { queryModDetail ,queryModDescribe,queryModImgsList} = require('../controller/queryModDetail')
//获取MOd详情
router.get('/getModDetail',async (ctx)=>{
    const { pid } = ctx.query;
   
    if(pid){
        try{
            const [res] =   await queryModDetail(pid)
            if(res){
                const listInfo = await queryModDescribe(pid)
                const imgList = await queryModImgsList(pid)
                res.listInfo=listInfo.map(item=>{
                    if(item.img){
                        item.img='/static/modgame/'+item.img
                    }
                    
                    return item
                });
                res.imgList = imgList.map(item=>{
                    item.imgname=`/static/modgame/${item.imgname}`
                    return item
                })
            }
          
            ctx.body=new SucessModel(res,'sucess')
        }
        catch(error){
            ctx.body=new ErrorModel(error,'sucess')
        }
    
    
    }
    else{
        ctx.body=new ErrorModel('pid不能为空')
    }
     
})
module.exports=router