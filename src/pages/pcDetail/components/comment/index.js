import {Fragment, useState} from 'react'
import style from './index.module.css'
import { CommentOutlined,EditOutlined } from '@ant-design/icons'
import CommentList  from './commList'
import {Drawer,Comment, Avatar, Form, Button,Input} from 'antd'
const { TextArea } = Input
function UserComment(){

        const [isVisible,setVisible]=useState(false)
        const [commentInner,setCommentInfo] = useState('')
        const openComment = ()=>{
            setVisible(true)
        }
        const onClose=()=>{
            setVisible(false)
        }
        const onChange = ({target})=>{
            setCommentInfo(target.value)
        }
        const onSubmit = ()=>{
            if(commentInner){
                onClose()
                setCommentInfo('')
            }
            
            
           
        }
    return <div className={style.commentWrap}>
            <h2 className={style.title}>
                <span className={style.taolun}>
                    <CommentOutlined  />
                    <span className={style.t}>玩家讨论</span>
                </span>
                <span  onClick={openComment} className={style.openCommentBtn}><EditOutlined />我要评论</span>
            </h2>
            <div className="commentContent" >
                <div className={style.commtBox} style={{position:'relative',overflow:'hidden'}}>
                    <div className={style.commtHead}>
                        <div className={style.tb}>全部</div>
                    </div>
                    <div >
                        <CommentList />
                        
                    </div>
                    <Drawer 
                            onClose={onClose}
                            visible={isVisible}
                            placement="top"
                            getContainer={false}
                            style={{ position: 'absolute' }}
                        > 
                         <Comment
                            avatar={
                                <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                                />
                            }
                            content={
                                <Fragment>
                                <Form.Item>
                                    <TextArea autoSize={{ minRows: 4, maxRows: 4 }} rows={4} onChange={onChange} value={commentInner} />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" style={{color:'#fff',borderColor:'#6b9af6',backgroundColor:'#6b9af6'}}  onClick={onSubmit} type="primary">
                                        提交评论
                                    </Button>
                                </Form.Item>
                                </Fragment>
                            }
                            />
                    </Drawer>
                </div>
            </div>
        </div>
}
export default UserComment;