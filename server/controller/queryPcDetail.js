const query = require('../mysql/mysql');

//添加评论
const addComment=async (uid,proId,content,commentId,parentId,commentDate)=>{
    const res = await query(`INSERT INTO pcdetailcomment (uid,proId,content,commentId,parentId,commentDate) VALUES (?,?,?,?,?,?)`,
    [uid,proId,content,commentId,parentId,commentDate])
 
    return res
}

//查询评论列表
const queryCommentList = async (proId,page,size)=>{
    const res = await query(`SELECT * FROM pcdetailcomment WHERE proId=? ORDER BY commentDate DESC LIMIT ?,?`,
    [proId,(page-1)*size,size*1])
    return res
}

//查询某个proId的评论条数
const queryByProIdCount = async (proId)=>{
    const res = await query(`SELECT COUNT(*) FROM pcdetailcomment WHERE proId=?`,
    [proId])
    return res
}

module.exports={
    addComment,
    queryCommentList,
    queryByProIdCount
}