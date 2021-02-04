import style from './index.module.css'
import { Avatar,Rate } from 'antd'
import { UserOutlined } from "@ant-design/icons"
import { useState,useRef, useEffect}from 'react'
import {useSelector}from 'react-redux'
const scoreMap ={
    '0.5':'1',
    '1':'2',
    '1.5':'3',
    '2':'4',
    '2.5':'5',
    '3':'6',
    '3.5':'7',
    '4':'8',
    '4.5':'9',
    '5':'10'
}
//评分hook逻辑
const useScore = ()=>{
    
    const [scroreText,setText] = useState('平庸，不玩也罢')
    const prevVal = useRef(scroreText)
    const [score,setScore] = useState('5')
    const isLogin = useSelector(state=>state.isLogin)//获取登录状态

    useEffect(() => {
        console.log('defen: ',score)
    }, [score]);
    
    const getText=(num)=>{
        //获取分数对应的文案
        let str = ''
        switch(num){
            case 0.5:
            case 1:
            case 1.5:
            case 2:
                 str = '很差，完全浪费时间';break;
            case 2.5 : str = '平庸，不玩也罢';break;
            case 3: str = '一般，不妨试试';break;
            case 3.5:str = '良好，颇具亮点';break;
            case 4:str = '佳作，公认的佳作';break;
            case 4.5:str = '神作，心头爱';break;
            case 5: str = '完美，不容错过';break;
            default:str=prevVal.current
        }
        return str
    }
    
    const sureScore=(val)=>{
        //点击星星确认分数
        setText(getText(val))
        setScore(scoreMap[val+''])
         prevVal.current = getText(val)
    }
    const hoverHandler = (val)=>{
        //鼠标滑过星星时变化提示语
        let str = getText(val)
        setText(str)
    }
    return {
        scroreText,
        setText,
        setScore,
        prevVal,
        getText,
        sureScore,
        hoverHandler,
        isLogin
    }
}
//评分组件
function UserStar(){
    const token = localStorage.getItem('jwt')||''
    const { scroreText, setText, setScore, prevVal,getText,sureScore,hoverHandler,isLogin } = useScore()

    return <div className={style.userStar}>
                <div className={style.avatar}>
                    {
                        isLogin?<Avatar
                        size={64}
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}/>
                            :<Avatar
                            size={64}
                                icon={<UserOutlined />}/>
                    }
                </div>
                <div className={style.rate}>
                    <Rate allowClear={false} allowHalf defaultValue={2.5} onChange={sureScore} onHoverChange={hoverHandler}/> 
                    <span className={style.tip}>{scroreText}</span>  
                </div>
    </div>
}
export default UserStar