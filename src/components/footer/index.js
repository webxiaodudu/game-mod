import { useState }from 'react'
import style from './index.module.css'
import {Layout,Row, Col} from 'antd'
import Logo from '@/components/logo'
const { Footer } = Layout
function GameModFooter(){
    const fData = [
        {id:'1',url:'http://www.baidu.com',webname:'玩Mod网'},
        {id:'2',url:'http://www.baidu.com',webname:'猫须网'},
        {id:'3',url:'http://www.baidu.com',webname:'游侠网'},
        {id:'4',url:'http://www.baidu.com',webname:'游民星空'}
    ]
    const [friendsList,setFriends] = useState(fData)
    return <Footer className={style.footer}>
       <Row>
        <Col span={8}>
            <Logo/>
        </Col>
        <Col span={8}>
            <h2 style={{color:'#fff'}}>友情链接</h2>
            <ul>
                {
                    friendsList.map(item=>{
                       return <li key={item.id}><a href={item.url}>{item.webname}</a></li>
                    })
                }
            </ul>
        </Col>
        <Col span={8}>col-8</Col>
    </Row>
    </Footer>
}
export default GameModFooter