const query = require('../mysql/mysql');
const queryPcHot=async (limit)=>{
    let sql = `select * from pc_hot_list order by id desc limit ${limit}`
   return await query(sql)
}


module.exports = {
    queryPcHot
}