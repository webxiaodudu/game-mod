import {Fragment, useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import style from './index.module.css'
import { CommentOutlined,EditOutlined } from '@ant-design/icons'
import CommentList  from './commList'
import {Drawer,Comment, Avatar, Form, Button,Input,message} from 'antd'
import request from '@/utils/request.js'
import {useGetPcCommentList} from '@/store/hooks/useGetPcCommentList'

const { TextArea } = Input
function UserComment(){
        const uid = localStorage.getItem('uid')
       const {id:proId} = useParams()
        const [isVisible,setVisible]=useState(false)
        const [commentInner,setCommentInfo] = useState('')
        const getCommentList = useGetPcCommentList()//获取评论列表方法
        

       const instance = useRef()
        const openComment = ()=>{
            //打开评论弹层
            const jwt = localStorage.getItem('jwt');
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
            setVisible(true)
        }
        const onClose=()=>{
            //关闭弹层
            setVisible(false)
        }
        const onChange = ({target})=>{
            //受控
            setCommentInfo(target.value)
        }
        const onSubmit = async ()=>{
            //提交评论
            if(commentInner){
                const option={
                    uid,
                    proId,
                    content:commentInner,
                    parentId:'0'
                }
                const res = await addComment(option)
               
                onClose()
                setCommentInfo('')
                getCommentList({proId})
                instance.current.onChange('1')
            }
            
            
           
        }
        const addComment=async (option)=>{
            //添加评论接口
            try{
                return await request.post('/addPcDetailComment',option)
            }catch(error){
               return  console.log(error,' /addPcDetailComment接口报错')
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
                            <CommentList proId={proId}  ref={instance} />                       
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