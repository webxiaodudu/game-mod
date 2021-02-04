import { Fragment,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import {Form,Button,Input} from 'antd'
import request from '@/utils/request.js'
import context from '../../context.js'
import { useGetPcCommentList } from '@/store/hooks/useGetPcCommentList' 
const { TextArea } = Input
function ReEdit(props){
    const { setShow,commentId } = props
    const [val,setVal] = useState('')
    const {id:proId} = useParams();
    const uid = localStorage.getItem('uid')
    const {current} = useContext(context);
    const getCommentList = useGetPcCommentList()
    const onChange =({target})=>{
        setVal(target.value)
    }
    const addComment=async (option)=>{
        //回复接口
        try{
            return await request.post('/addPcDetailComment',option)
        }catch(error){
           return  console.log(error,' /addPcDetailComment接口报错')
        }
        
    }
    const onSubmit=async ()=>{
       
        if(val){
            const option={
                uid,
                proId,
                content:val,
                parentId:commentId
            }
            const res = await addComment(option)
            setShow(false)
            setVal('')
            console.log(proId,' ---proId')
            getCommentList({proId,current})
            //console.log(current,' --con')
        }
    }
    return (
        <Fragment>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={val} />
            </Form.Item>
            <Form.Item>
                <Button style={{color:'#fff',borderColor:'#6b9af6',backgroundColor:'#6b9af6'}} htmlType="submit"  onClick={onSubmit} type="primary">
                    添加回复
                </Button>
            </Form.Item>
        </Fragment>
    )
}
export default ReEdit