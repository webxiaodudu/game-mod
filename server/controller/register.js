const query = require('../mysql/mysql');

const addUser = async (uid,username,password,phone,gender,email,nickname,datepicker,age,info)=>{
   
        const res = await query(`INSERT INTO game_mod.users (uid,username,password,phone,gender,email,nickname,birthday,age,desinfo) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [uid+'',username+'',password+'',phone+'',gender+'',email+'',nickname+'',datepicker+'',age+'',info])
     
        return res

}


const checkUserName = async (username)=>{
    return await query(`select * from users where username=?`,[username])
}

const checkPhone = async (phone) =>{
    return await query(`select * from users where phone=?`,[phone])
}

const checkEmail = async(email)=>{
    return await query(`select * from users where email=?`,[email])
}

module.exports={
    addUser,
    checkUserName,
    checkPhone,
    checkEmail
}
