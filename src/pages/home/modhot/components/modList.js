import { useHistory } from 'react-router-dom'
import style from './modList.module.css'
import { List, Card }from 'antd'
const { Meta } =Card
function ModList(props){
    const { data } = props
    const history = useHistory()
    const toDetail = (pid)=>{
 
       history.push(`/modDetail/${pid}`)
    }
    return <List
             style={{paddingTop:'20px'}}
            grid={{ gutter: 16, column: 5 }}
            dataSource={data}
            renderItem={item => (
            <List.Item onClick={()=>{
                toDetail(item.pid)
            }}>
                <Card
                hoverable
                style={{ width: 240 }}
                 cover={<div className={style.cover} style={{backgroundImage:`url(${item.cover})`}}></div>}
                >
                    <Meta title={item.modname} description={
                        <ul className={style.modItemList}>
                        <li><span>游戏评分：</span><span>{item.star}</span></li>
                        <li><span>mod作者：</span><span>{item.author}</span></li>
                        <li><span>上市时间：</span><span>{item.uptime}</span></li>
                        <li><span>原游戏本体：</span><span>{item.original}</span></li>
                    </ul>
                    } />
                </Card>
            </List.Item>
            )}
        />
}
export default ModList;