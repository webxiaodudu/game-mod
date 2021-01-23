const query = require('../mysql/mysql');

async function  queryModList(limit=10,type='1'){
    const sql = `select pid,modname,cover,type,author,uptime,star,original from modlist where type=? order by id desc limit ?`;
   return await query(sql,[type,limit])
}
module.exports = {
    queryModList
}