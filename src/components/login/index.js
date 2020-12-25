import {NavLink} from 'react-router-dom'
import style from './index.module.css'
import { Fragment,useState } from 'react'
import { Modal } from 'antd';

export default function Login(){
    const [isShow,setShow] = useState(false)

     const showModal = () => {
        setShow(true);
      };
    
      const handleOk = () => {
        setShow(false);
      };
    
      const handleCancel = () => {
        setShow(false);
      };

    return <Fragment>
    <div className={style.logincontent}>
        <span className={style.loginBtnBg}></span>
        <span className={style.loginBtn} onClick={showModal}>登录</span>
        <NavLink to='/regesiter' className={style.regesiterBtn} >注册</NavLink>
    </div>
    <Modal title="登录" visible={isShow} onOk={handleOk} onCancel={handleCancel} />
    </Fragment>
}