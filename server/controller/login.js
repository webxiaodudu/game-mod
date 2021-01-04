const query = require('../mysql/mysql');
const queryUser=async (username,password)=>{
    let sql = `select * from users where username = ?  and password = ?`
   return await query(sql,[username,password])
}


module.exports = {
    queryUser
}