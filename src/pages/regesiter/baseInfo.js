import { Form, Input, Button, Radio, Steps, DatePicker, InputNumber } from 'antd';
import style from './index.module.css'
import useChangeStep from './hooks'
export default function BaseInfo(props){
    
   const { history ,setCurrent}  = props
   

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
      const onFinish = (values) => {
      
        history.push('/regesiter/person',values);
        setCurrent(1)
      };
    
      const onFinishFailed = (errorInfo) => {
          
        console.log('Failed:', errorInfo);
      };

      return ( <div className={style.regesiterBox} >
      <Form  
        requiredMark={true}
          name="regesiter"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          {...layout}
      >
          <Form.Item
          label="姓名"
          className={style.labelName}
          name="username"
            rules={[
                {
                    whitespace:true,
                    required: true,
                    message: '请输入姓名！',
                },
            ]}
          >
              <Input />
          </Form.Item>
          <Form.Item
          label="设置密码"
          className={style.labelName}
          name="password"
              rules={[
                  {
                      whitespace:true,
                      required: true,
                      message: '请设置登录密码！',
                  },
              ]}
          >
              <Input.Password />
          </Form.Item>
          <Form.Item
          label="确认密码"
          className={style.labelName}
          name="repassword"
              rules={[
                  {
                    whitespace:true,
                      required: true,
                      message: '请确认密码是否正确！',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('两次密码输入不一致！');
                    },
                  }),
              ]}
          >
              <Input.Password />
          </Form.Item>
          <Form.Item
          label="手机号"
          className={style.labelName}
          name="phone"
              rules={[
                  {
                    whitespace:true,
                    pattern:/^1[3456789]\d{9}$/,
                    required: true,
                    message: '请输入正确的手机号！',
                  },
              ]}
          >
              <Input />
          </Form.Item>
          <Form.Item
          label="性别"
          className={style.labelName}
          name="gender"
              rules={[
                  {
                      required: true,
                      message: '请选择性别！',
                  },
              ]}
          >
              <Radio.Group name="gender" value={1}>
                  <Radio  value={1}>男</Radio>
                  <Radio  value={2}>女</Radio>
              </Radio.Group>
          </Form.Item>
          <Form.Item
          label="邮箱"
          className={style.labelName}
          name="email"
              rules={[
                  {
                      pattern:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                    whitespace:true,
                      required: true,
                      message: '请填写正确的邮箱',
                  },
              ]}
          >
              <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button ghost htmlType="submit">
                下一步
            </Button>
      </Form.Item>
      </Form>
     
  </div>)

}