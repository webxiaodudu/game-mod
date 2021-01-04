const Koa= require('koa');
const staticCache = require('koa-static-cache')
const KoaBody = require('koa-body')
const kaoJwt = require('koa-jwt');

const registerRouter = require('./routes/register')//注册相关路由
const loginRouter = require('./routes/login')//登录接口

const app= new Koa();
app.use(staticCache({
    prefix: '/static',
    dir: __dirname+'/public',
    dynamic:true
}))

app.use(KoaBody());
const whiteArr = [
    /^\/login/,
    /^\/register/,
    /^\/checkRegisterInfo/
]
app.use(kaoJwt({secret:'wangpaijun'}).unless({ path: whiteArr }))
app.use(registerRouter.routes())
app.use(loginRouter.routes())

app.listen(8888)



