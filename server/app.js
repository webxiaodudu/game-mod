const Koa= require('koa');
const staticCache = require('koa-static-cache')
const KoaRouter = require('@koa/router');
const KoaBody = require('koa-body')
const query = require('./mysql/mysql')

const app= new Koa();
const router= new KoaRouter()

app.use(staticCache({
    prefix: '/static',
    dir: __dirname+'/public',
    dynamic:true
}))

app.use(KoaBody());




router.post('/register',async (ctx)=>{

  
    const {username,password,repassword,phone,gender,email,nickname,datepicker,age,info}=ctx.request.body
   
    if(!username||!password||!repassword||!phone||!gender||!email||!nickname||!datepicker||!age){
        ctx.body={
            code:'0',
            message:'输入信息有误',
            data:null
        }
        
        return 
    }
    if(password!==repassword){
        ctx.body={
            code:'0',
            message:'输入信息有误,两次密码不一致',
            data:null
        }
        return 
    }
  
    try{
        const [res] = await query(`select * from users where username=?`,[username])
        if(res){
            console.log(res)
          return ctx.body={
                code:'2',
                message:'该用户名已被注册！',
                data:null
            }
        }
    }catch(error){
       return ctx.body={
            code:'0',
            message:error,
            data:null
        }
    }

    try{
        const [res] = await query(`select * from users where email=?`,[email])
        if(res){
          return ctx.body={
                code:'4',
                message:'该邮箱已被注册！',
                data:null
            }
        }
    }catch(error){
       return ctx.body={
            code:'0',
            message:error,
            data:null
        }
    }

    try{
        const [res] = await query(`select * from users where phone=?`,[phone])
        if(res){
          return ctx.body={
                code:'3',
                message:'该手机号已被注册！',
                data:null
            }
        }
    }catch(error){
       return ctx.body={
            code:'0',
            message:error,
            data:null
        }
    }

    const uid = new Date().getTime()*100000..toFixed(0)

    try{
        const res = await query(`INSERT INTO game_mod.users (uid,username,password,phone,gender,email,nickname,birthday,age,desinfo) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [uid+'',username+'',password+'',phone+'',gender+'',email+'',nickname+'',datepicker+'',age+'',info])
        if(res){
            
          return  ctx.body={
                code:'200',
                message:'注册成功',
                data:res
            }
        }
        
    }catch(error){
       
        return ctx.body={
            code:'0',
            message:error,
            data:null
        }
    }
    
    
})



app.use(router.routes())

app.listen(8888)
