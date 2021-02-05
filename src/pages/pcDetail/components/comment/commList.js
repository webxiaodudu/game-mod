import { Comment, List,Pagination } from 'antd';


import {useState,useEffect,useRef,useImperativeHandle,forwardRef} from 'react'
import {useSelector} from 'react-redux'
import {useGetPcCommentList} from '@/store/hooks/useGetPcCommentList'
import {Provider} from '@/pages/pcDetail/context'
function CommentList(props,ref){
    const [current,setCurrent] = useState('1')//当前页
    const [size,setSize] = useState('5');//每页显示条数
    const data = useSelector(state=>state.pcCommentData)
    const { proId }= props//proId游戏ID
    const getCommentData=useGetPcCommentList();//获取数据方法
    const commentListInstance = useRef();//为了父组件能获取子组件实例调用方法
    const [curList,setCurList]=useState([])
    const isUpdate = useRef(false)
   const {total,list} =data

    const onChange = (page)=>{
     
      setCurrent(page)
    }

  //暴露给父组件方法提交评论后调用刷新列表
    useImperativeHandle(ref,()=>{
      return {
        onChange,
      }
    })

    useEffect(()=>{
      
        getCommentData({proId,current,size})
    },[current])

   
  

      const getList = (list)=>{
             return (
               <Provider value={{current}}>
                <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                  
                <li style={{borderBottom:`${item.parentId=='0'?'1px dotted #ccc':'none'}`}}>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar?item.avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    content={item.content}
                    datetime={item.datetime}
                   
                    >
                        {item.children&&getList(item.children)}
                    </Comment>
                    
                </li>
                )}
            />
            </Provider>
             )   
      }
    return <div ref={commentListInstance}>
           {getList(list)}
           <div style={{textAlign:'center',marginTop:'20px'}}>
             <Pagination
             hideOnSinglePage={true}
              current={current*1} 
              onChange={onChange}
               total={total}
               pageSize={size}
            />
          </div>
        </div>
}
export default forwardRef(CommentList)