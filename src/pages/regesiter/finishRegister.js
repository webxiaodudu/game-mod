import { Link }from 'react-router-dom'
import style from './index.module.css'
import {
    CheckCircleFilled
  } from '@ant-design/icons'
export default function FinishReg(props){
    return (
        <div className={style.regesiterBox}>
        <p className="padd20" style={{lineHeight:'30px'}}> 
            <CheckCircleFilled style={{color:'#52c41a',fontSize:'30px'}}/>
            <span style={{color:'#52c41a',fontSize:'20px',marginLeft:'20px'}}>成功注册！</span>
        </p>
        <Link to="/">返回首页</Link>
    </div>
    )
}