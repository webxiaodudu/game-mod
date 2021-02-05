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

//查询原来的点赞数量
const queryGoodNum = async (commentId)=>{
    const res = await query(`SELECT goodCount FROM pcdetailcomment WHERE commentId=?`,[commentId])
    return res
}
//pcDetail评论点赞

const updateGoodNum = async (commentId,goodCount)=>{
    
    const res = await query(`UPDATE pcdetailcomment SET goodCount=? WHERE commentId=?`,[goodCount,commentId])
    return res
}
//查询原来的踩数量
const queryBadNum = async (commentId)=>{
    const res = await query(`SELECT badCount FROM pcdetailcomment WHERE commentId=?`,[commentId])
    return res
}
//pcDetail评论踩数量更新

const updateBadNum = async (commentId,badCount)=>{
    
    const res = await query(`UPDATE pcdetailcomment SET badCount=? WHERE commentId=?`,[badCount,commentId])
    return res
}

module.exports={
    addComment,
    queryCommentList,
    queryByProIdCount,
    updateGoodNum,
    queryGoodNum,
    updateBadNum,
    queryBadNum
}