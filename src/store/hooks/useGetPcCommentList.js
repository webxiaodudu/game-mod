import {useDispatch} from 'react-redux'
import request from '@/utils/request'
import moment from 'moment';
import ActionCom from '@/pages/pcDetail/components/comment/action'
import {Tooltip} from 'antd'
function toData(data){
  
    const copyData = JSON.parse(JSON.stringify(data))
    copyData.list = copyData.list.map(item=>{
     const {commentId,nickname,avater,content,uid,proId,parentId,commentDate,goodCount,badCount}=item
        return {
          goodCount,
          badCount,
          uid,
          proId,
          commentId,
          parentId,
          actions: [<ActionCom commId={commentId} goodCount={goodCount} badCount={badCount} />],
          author: nickname,
          avatar: avater,
          content: (
            <p>
              {content}
            </p>
          ),
          datetime: (
            <Tooltip title={commentDate}>
              <span>{moment(commentDate).fromNow()}</span>
            </Tooltip>
          ),
        }
    })
    return copyData
}
function assembleTree(params) {
  var options = {
    data: params.data,
    parent: params.parent,
    id: params.id,
    child: params.child
  };
  let tree = options.data.filter(function (parent) {
    let item = options.data.filter(function (child) {
      return parent[options.id] == child[options.parent];
    });
    if (item.length > 0) {
      parent[options.child] = item; 
    }
    return parent[options.parent] === '0';
  });
  return tree;
}
function toTree(tempdata){
   const data = toData(tempdata)
  const result = assembleTree({
    data:data.list,
    parent:'parentId',
    id:'commentId',
    child:'children'
   })
   data.list=result
   console.log(data)
  return data
}
function useGetPcCommentList(){
    const dispatch = useDispatch()
    
    return async ({proId='',current='1',size='5'})=>{
        dispatch({type:'LIST_LOADING'});

        const {data:{data}}=await request.get('/getCommentList',{params:{proId}})
        if(data.list&&data.list.length){
          const treeData = toTree(data)
          console.log(treeData,'treeData')
          const start=(parseInt(current)-1)*size
         const subList = treeData.list.slice(start,start+size*1)
          console.log(subList,start,' ---subList')
          treeData.list=subList
          dispatch({type:'LIST_LOAD',data:treeData});
        }else{
          dispatch({type:'LIST_LOAD',data:[]});
        }
        
       
    }

}
export {
    useGetPcCommentList
}