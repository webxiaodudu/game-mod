import {  useState} from 'react'
import {Tooltip} from 'antd'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import style from './action.module.css'
import ReEdit from './reEdit'
import context from '../../context'
function ActionCom(props){
    const { commId} = props
    const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
    const [isShow,setShow] = useState(false)

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
    return (
            <div className={style.actionBox}>
            <span key="comment-list-reply-to-0" className={style.replay} onClick={()=>{setShow(!isShow)}} >回复</span>
            <Tooltip key="comment-basic-like" title="赞">
                <a onClick={like} className={style.ahref}>
                    {action === 'liked' ? <LikeFilled style={{color:'orange'}} /> : <LikeOutlined />}
                    <span className="comment-action">{likes}</span>
                </a>
                </Tooltip>
            <Tooltip key="comment-basic-dislike" title="踩">
                    <a onClick={dislike} className={style.ahref}>
                        {action === 'disliked' ? <DislikeFilled style={{color:'orange'}}/> : <DislikeOutlined />}
                        <span className="comment-action">{dislikes}</span>
                    </a>
            </Tooltip>
            <div className={style.reEditWrap}>
            {isShow?<ReEdit setShow={setShow} />:''}
            </div>
        </div>
    )
}
export default ActionCom