
import { Card ,Button} from 'antd';
import style from './index.module.css'
import { useEffect  } from 'react'
import useGetPCHotListData from './hook'
import {DoubleRightOutlined }from '@ant-design/icons'
const { Meta } = Card;
const gameTypeMap = {
    '1':'射击',
    '2':'动作冒险',
    '3':'角色扮演',
    '4':'即时战略',
    '5':'竞速',
    '6':'体育',
    '7':'模拟',
    '8':'策略'
}
function HotPC(props){
    
    const {hotList,getData} = useGetPCHotListData()

    useEffect(() => {
        getData()
    },[]);

    return <div className={style.hotpc}>
                <h2 className={style.hotpcTitle}><span style={{color:'red'}}>热门</span>单机推荐</h2>
                <ul className={style.hotList}>

                    {
                        hotList.map((pcGame,index)=>{
                            return <li key={pcGame.id}>
                   
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<div className={style.cover} style={{backgroundImage:`url(${pcGame.cover})`}}></div>}
                            >
                                <Meta title={pcGame.title} 
                                    description={
                                    <ul className={style.hotItemList}>
                                        <li><span>游戏评分：</span><span>5</span></li>
                                        <li><span>开发公司：</span><span>{pcGame.company}</span></li>
                                        <li><span>上市时间：</span><span>{pcGame.date}</span></li>
                                        <li><span>游戏类型：</span><span>{gameTypeMap[pcGame.type]}</span></li>
                                    </ul>} style={{height:120}} />
                            </Card>
                            </li>

                        })
                    }
                    
                    
                </ul>
                <p className={style.pcMore}><Button ghost icon={<DoubleRightOutlined/>} type="primary"  style={{color:'red',fontWeight:'bold'}} >更多游戏</Button></p>
            </div>
}
export default HotPC;