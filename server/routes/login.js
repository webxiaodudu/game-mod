const KoaRouter = require('@koa/router');
const router = new KoaRouter()

const { SucessModel ,ErrorModel } = require('../model/index')
const { queryUser } = require('../controller/login')

router.post('/login',async (ctx)=>{
    const {username,password} = ctx.request.body;

    if(!username){
       return ctx.body=new ErrorModel('用户名不能为空！')
    }

    if(!password){
        return ctx.body=new ErrorModel('密码不能为空！')
        
    }

    const [res] = await queryUser(username,password);

    if(res){
        return ctx.body = new SucessModel(res,'登陆成功')
    }
    else{
        return ctx.body = new ErrorModel('用户名或密码不正确')
    }



})


module.exports = router;