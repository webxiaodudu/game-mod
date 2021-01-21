const query = require('../mysql/mysql');

async function  queryModDetail(pid=''){
    const sql = `select * from modlist where pid=?`;
   return await query(sql,[pid])
}
module.exports = {
    queryModDetail
}