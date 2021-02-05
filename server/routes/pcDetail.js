const KoaRouter = require('@koa/router')

const router = new KoaRouter()
const { SucessModel ,ErrorModel } = require('../model/index')
const { addComment,queryCommentList,queryByProIdCount,updateGoodNum,queryGoodNum,queryBadNum,updateBadNum} =require('../controller/queryPcDetail')//新增评论接口


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
    const {proId} = ctx.query;
    if(!proId){
        ctx.body = new ErrorModel('入参信息有误')
        return
    }
    try{
        const res =await queryCommentList(proId)
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

//更新点赞数量接口
router.post('/addGoodNumPcComment',async (ctx)=>{
    const { commentId } = ctx.request.body;

    if(!commentId){
        ctx.body = new ErrorModel('commentId入参信息有误')
        return
    }
    try{
        const [{goodCount}] =await queryGoodNum(commentId)
        const res =await updateGoodNum(commentId,goodCount*1+1)
        console.log(goodCount)
        if(res){
            ctx.body=new SucessModel('OK')
        }
        else{
            ctx.body=new SucessModel('error')
        }
       
    }catch(error){
        ctx.body=new ErrorModel(error,'error')
        console.log(error)
    }
    
})

//更新踩数量接口
router.post('/addBadNumPcComment',async (ctx)=>{
    const { commentId } = ctx.request.body;

    if(!commentId){
        ctx.body = new ErrorModel('commentId入参信息有误')
        return
    }
    try{
        const [{badCount}] =await queryBadNum(commentId)
        const res =await updateBadNum(commentId,badCount*1+1)
        console.log(badCount)
        if(res){
            ctx.body=new SucessModel('OK')
        }
        else{
            ctx.body=new SucessModel('error')
        }
       
    }catch(error){
        ctx.body=new ErrorModel(error,'error')
        console.log(error)
    }
    
})
module.exports= router