const query = require('../mysql/mysql');
const queryPcHot=async (limit)=>{
    let sql = `select * from pchotlist order by id desc limit ${limit}`
   return await query(sql)
}


module.exports = {
    queryPcHot
}