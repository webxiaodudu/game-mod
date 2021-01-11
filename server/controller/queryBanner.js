const query = require('../mysql/mysql');
const queryBannerList=async (limit)=>{
    let sql = `select * from bannerlist order by id desc limit ${limit}`
   return await query(sql)
}


module.exports = {
    queryBannerList
}