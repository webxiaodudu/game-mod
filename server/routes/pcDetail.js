const KoaRouter = require('@koa/router')

const router = new KoaRouter()
const { SucessModel ,ErrorModel } = require('../model/index')
const { addComment,queryCommentList,queryByProIdCount} =require('../controller/queryPcDetail')//新增评论接口


router.post('/addPcDetailComment',async (ctx)=>{
    const { uid,proId,content,parentId} = ctx.request.body
    if(!uid||!proId||!content||!parentId){
        ctx.body = new ErrorModel('入参信息有误')
        return
    }

    const commentId=new Date().getTime().toFixed(0)
    const commentDate=new Date().toLocaleString()
    
    
    try{
        const res =await addComment(uid,proId,content,commentId,parentId,commentDate)
        if(res){
            ctx.body=new SucessModel('添加评论成功！')
        }
        else{
            ctx.body=new ErrorModel('添加评论失败！')
        }
    }catch(error){
        ctx.body=new ErrorModel(error,'添加评论失败！')
        console.log(error)
    }
   
})

router.get('/getCommentList',async (ctx)=>{
    const {proId,page,size} = ctx.query;
    if(!proId||!page||!size){
        ctx.body = new ErrorModel('入参信息有误')
        return
    }
    try{
        const res =await queryCommentList(proId,page,size)
        const [{"COUNT(*)":total}] = await queryByProIdCount(proId)
     
        if(res.length){
            ctx.body=new SucessModel({list:res,total},'OK')
        }
        else{
            ctx.body=new SucessModel({list:res,total},'OK')
        }
    }catch(error){
        ctx.body=new ErrorModel(error,'error')
        console.log(error)
    }
    

})
module.exports= router