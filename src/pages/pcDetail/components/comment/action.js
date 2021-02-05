import {  useState,useContext} from 'react'
import {  useParams } from 'react-router-dom'
import {Tooltip,message} from 'antd'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import style from './action.module.css'
import ReEdit from './reEdit'
import request from '@/utils/request.js'
import context from '../../context.js'
import { useGetPcCommentList } from '@/store/hooks/useGetPcCommentList' 
function ActionCom(props){
 
    const { commId,badCount,goodCount} = props

  const [action, setAction] = useState(null);
    const [isShow,setShow] = useState(false)
    const [isFlag,setFlag] = useState(true)
    
    const getCommentList = useGetPcCommentList()
    const {current} = useContext(context);
    const {id:proId} = useParams();
    const updateGoodNum = async (commId)=>{
      try{
        await request.post('/addGoodNumPcComment',{commentId:commId})
        getCommentList({proId,current})
      }catch(error){
        console.log(error)
      }
      
    }

    const updateBadNum = async (commId)=>{
      try{
        await request.post('/addBadNumPcComment',{commentId:commId})
        getCommentList({proId,current})
      }catch(error){
        console.log(error)
      }
      
    }
  const like = () => {
    const jwt = localStorage.getItem('jwt')
    if(!jwt){
      message.error({
        content: '请登录后再尝试此操作！',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
      return
    }
    if(isFlag){
   
      setAction('liked');
      setFlag(false)
      updateGoodNum(commId)
     
    }
    
  };

  const dislike = () => {
    const jwt = localStorage.getItem('jwt')
    if(!jwt){
      message.error({
        content: '请登录后再尝试此操作！',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
      return
    }
   if(isFlag){
      //setDislikes(dislikes+1);
      setAction('disliked');
      setFlag(false)
      updateBadNum(commId)
      getCommentList({proId,current})
    }
   
  };


    return (
            <div className={style.actionBox}>
            <span key="comment-list-reply-to-0" className={style.replay} onClick={()=>{
               const jwt = localStorage.getItem('jwt')
              if(!jwt){
                message.error({
                  content: '请登录后再尝试此操作！',
                  className: 'custom-class',
                  style: {
                    marginTop: '20vh',
                  },
                });
                return
              }
              setShow(!isShow)}
            } >回复</span>
            <Tooltip key="comment-basic-like" title="赞">
                <a onClick={like} className={style.ahref}>
                    {action === 'liked' ? <LikeFilled style={{color:'orange'}} /> : <LikeOutlined />}
                    <span className="comment-action">{goodCount}</span>
                </a>
                </Tooltip>
            <Tooltip key="comment-basic-dislike" title="踩">
                    <a onClick={dislike} className={style.ahref}>
                        {action === 'disliked' ? <DislikeFilled style={{color:'orange'}}/> : <DislikeOutlined />}
                        <span className="comment-action">{badCount}</span>
                    </a>
            </Tooltip>
            <div className={style.reEditWrap}>
            {isShow?<ReEdit setShow={setShow} commentId={commId}/>:''}
            </div>
        </div>
    )
}
export default ActionCom