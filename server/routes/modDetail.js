const KoaRouter = require('@koa/router')
const router = new KoaRouter()
const { SucessModel ,ErrorModel } = require('../model/index')

const { queryModDetail } = require('../controller/queryModDetail')
router.get('/getModDetail',async (ctx)=>{
    const { pid } = ctx.query;
   
    if(pid){
        try{
            const res =   await queryModDetail(pid)
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