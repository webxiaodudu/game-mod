const query = require('../mysql/mysql');

//添加评论
const addComment=async (uid,proId,content,commentId,parentId,commentDate)=>{
    const res = await query(`INSERT INTO pcdetailcomment (uid,proId,content,commentId,parentId,commentDate) VALUES (?,?,?,?,?,?)`,
    [uid,proId,content,commentId,parentId,commentDate])
 
    return res
}

//查询评论列表
const queryCommentList = async (proId)=>{
    const res = await query(`SELECT pcdetailcomment.uid,pcdetailcomment.proId,pcdetailcomment.content,commentId,pcdetailcomment.parentId,pcdetailcomment.commentDate,pcdetailcomment.goodCount,pcdetailcomment.badCount,users.nickname,users.avater FROM pcdetailcomment INNER JOIN users ON pcdetailcomment.uid=users.uid WHERE proId=? ORDER BY commentDate DESC`,
    [proId])
    return res
}

//查询某个proId的评论条数
const queryByProIdCount = async (proId)=>{
    const res = await query(`SELECT COUNT(*) FROM pcdetailcomment WHERE proId=? and parentId=?`,
    [proId,'0'])
    return res
}

module.exports={
    addComment,
    queryCommentList,
    queryByProIdCount
}