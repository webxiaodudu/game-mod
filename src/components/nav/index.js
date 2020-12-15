import { useState } from 'react'
import { Menu } from 'antd';
const data = [
    {id:'1',txt:'首页'},
    {id:'2',txt:'mod集合'},
    {id:'3',txt:'游戏攻略'},
    {id:'4',txt:'游戏社区'}
]
function Nav(){

    const [menuList,setMenuList] = useState(data) 
    const [current,setCurrent] = useState('1')

    return <Menu 
                mode="horizontal" 
                theme="dark" 
                selectedKeys={[current]}
                style={{backgroundColor:'#2A2A2A'}}
            >
            {
                menuList.map(item=>{
                    return <Menu.Item key={item.id} onClick={()=>{
                        setCurrent(item.id)
                    }} >
                            { item.txt }
                    </Menu.Item>
                })
            }
        {/* <Menu.Item key="mail">
        </Menu.Item> */}
    </Menu> 
}
export default Nav