import { Link }from 'react-router-dom'
import style from './index.module.css'
import { CheckCircleFilled  } from '@ant-design/icons'
import { useEffect ,useState} from 'react'

export default function FinishReg(props){
 
    let [count,setCount] = useState(10)
    const {history} = props
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount(--count)
            if(count==0){
                clearTimeout(timer)
                history.push('/')
                timer=null
            }
        },1000)

    })
    return (
        <div className={style.regesiterBox}>
        <p className="padd20" style={{lineHeight:'30px'}}> 
            <CheckCircleFilled style={{color:'#52c41a',fontSize:'30px'}}/>
            <span style={{color:'#52c41a',fontSize:'20px',marginLeft:'20px'}}>成功注册！</span>
        </p>
        <Link to="/">返回首页</Link>
        <span style={{marginLeft:'20px'}}>{count}秒后返回首页</span>
    </div>
    )
}