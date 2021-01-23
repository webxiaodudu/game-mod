const query = require('../mysql/mysql');

async function  queryModDetail(pid=''){
    const sql = `select * from modlist where pid=?`;
   return await query(sql,[pid])
}

async function  queryModDescribe(pid=''){
    const sql = `select * from modinfo where pid=?`;
   return await query(sql,[pid])
}

async function  queryModImgsList(pid=''){
    const sql = `select * from moddetailimgs where pid=?`;
   return await query(sql,[pid])
}
module.exports = {
    queryModDetail,
    queryModDescribe,
    queryModImgsList
}