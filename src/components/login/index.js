import {NavLink} from 'react-router-dom'
import style from './index.module.css'
export default function Login(){
    return <div className={style.logincontent}>
        <span className={style.loginBtnBg}></span>
        <span className={style.loginBtn}>登录</span>
        <NavLink to='/regesiter' className={style.regesiterBtn} >注册</NavLink>
    </div>
}