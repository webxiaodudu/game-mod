const Koa= require('koa');
const staticCache = require('koa-static-cache')
const KoaRouter = require('@koa/router');



const app= new Koa();


app.use(staticCache({
    prefix: '/static',
    dir: __dirname+'/public',
    dynamic:true
}))
const router= new KoaRouter()
router.get('/test',async (ctx)=>{
    ctx.body={test:'sucessful'}
})

app.use(router.routes())

app.listen(8888)
