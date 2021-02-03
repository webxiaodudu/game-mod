import { Fragment,useState} from 'react'
import {Form,Button,Input} from 'antd'

const { TextArea } = Input
function ReEdit(props){
    const { setShow } = props
    const [val,setVal] = useState('')
    
    const onChange =({target})=>{
        setVal(target.value)
    }
    const onSubmit=()=>{
       
        if(val){
            console.log('提交回复！：',val);
            setShow(false)
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