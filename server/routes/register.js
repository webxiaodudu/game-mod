const KoaRouter = require('@koa/router');
const router = new KoaRouter()

const { SucessModel ,ErrorModel } = require('../model/index')
const { addUser,checkUserName,checkPhone,checkEmail } = require('../controller/register')

router.post('/checkRegisterInfo',async (ctx) =>{
    const { username, phone, email } = ctx.request.body

    const [res1] = await checkUserName(username)//查询用户名是否已存在
    const [res2] = await checkPhone(phone)//查询手机号是否已存在
    const [res3] = await checkEmail(email)//查询邮箱是否已存在

    if(res1){
        return ctx.body=new ErrorModel('该用户名已被注册!')
    }

    if(res2){
        return ctx.body=new ErrorModel('该手机号已被注册!')
    }
    if(res3){
        return ctx.body=new ErrorModel('该邮箱已被注册!')
    }

    ctx.body = new SucessModel('可注册！');
   

})


router.post('/register', async (ctx) => {

    const { username, password, repassword, phone, gender, email, nickname, datepicker, age, info } = ctx.request.body

    if (!username || !password || !repassword || !phone || !gender || !email || !nickname || !datepicker || !age) {
        ctx.body = new ErrorModel('输入信息有误')
        return
    }

    if (password !== repassword) {
        ctx.body = new ErrorModel('输入信息有误,两次密码不一致')
        return
    }
    const uid = new Date().getTime().toFixed(0)
   const data = await addUser(uid,username,password,phone,gender,email,nickname,datepicker,age,info)

   ctx.body=new SucessModel('注册成功！');
})


module.exports = router


