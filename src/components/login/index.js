import {NavLink} from 'react-router-dom'
import style from './index.module.css'
import { Fragment,useState } from 'react'
import { Modal ,Form, Input,message} from 'antd';
import {loginApi} from '@/api/login'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
  labelAlign:'left'
};
export default function Login(){
    const [loginForm] = Form.useForm();
    const [isShow,setShow] = useState(false)
  
   
     const showModal = () => {
        setShow(true);
      };
    
      const handleOk = () => {
        //提交表单数据
        loginForm.submit();
        //setShow(false);
      
      };
    
      const handleCancel = () => {
        setShow(false);
      };

      const onFinish =async (values)=>{
        //验证通过，走登录接口
      const res = await loginApi(values)
        
       const { code,message:msg} = res.data;
       if(code==0){
         
        if(res.headers&&res.headers.authorization){
          localStorage.setItem('jwt',res.headers.authorization)
        }

          setShow(false);
       }
       else{
        message.error(msg);
       }
       
      }
      const onFinishFailed = (errorInfo) => {
        //验证未通过
        console.log('Failed:', errorInfo);
      };
    return <Fragment>
    <div className={style.logincontent}>
        <span className={style.loginBtnBg}></span>
        <span className={style.loginBtn} onClick={showModal}>登录</span>
        <NavLink to='/regesiter' className={style.regesiterBtn} >注册</NavLink>
    </div>
    {/*以下是登录弹层 */}
    <Modal title="登录" visible={isShow} onOk={handleOk} onCancel={handleCancel} >
    <Form
      form={loginForm}
      name="loginform"
      {...layout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
    </Form>

    </Modal>
    </Fragment>
}