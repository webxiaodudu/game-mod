import { Form, Input, Button,DatePicker,InputNumber  } from 'antd';
import style from './index.module.css'
import { registerApi } from '@/api/register.js'

const { TextArea } = Input;

export default function PersonalInfo(props){
    const { history,location ,setCurrent} = props
    const { state } = location
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
    const config = {
        rules: [
          {
            type: 'object',
            required: true,
            message: '请选择日期',
          },
        ],
      };

      const onFinish = async (values) => {
         //校验完成提交数据
          const {datepicker} = values
           values.datepicker= datepicker.format('YYYY-MM-DD')
         const ajaxOption = {...state,...values}
         const {data} = await registerApi(ajaxOption)
         if(data){
           console.log(data,' --响应数据')
           history.push('/regesiter/finish')
           setCurrent(2)
         }
       
      };
    
      const onFinishFailed = (errorInfo) => {
          
        console.log('Failed:', errorInfo);
      };
    return (
        <div className={style.regesiterBox}>
        <Form 
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
         name="personform">
            <Form.Item
                label="昵称"
                className={style.labelName}
                name="nickname"
                rules={[
                    {
                        required: true,
                        message: '请输入昵称！',
                    },
                ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="datepicker"  label="出生日期" {...config}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="age"
                rules={[
                  {
                    
                      type:'number',
                      required: true,
                      message: '请输入年龄',
                  },
                ]}  
                label="年龄" >
                    <InputNumber min={1} />
                </Form.Item>
                <Form.Item name="info"  
                label="个人说明" >
                    <TextArea/>
                </Form.Item>
                <Form.Item {...tailLayout} >
                    <Button ghost style={{marginRight:'20px'}} onClick={()=>{
                      history.go(-1)
                      setCurrent(0)
                    }}>
                       返回上一步
                    </Button>
                    <Button type="primary" htmlType="submit">
                        确认
                    </Button>
                </Form.Item> 
        </Form>
        </div>
    )
}