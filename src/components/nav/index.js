import { useState,useEffect } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { Menu } from 'antd';
import style from './index.module.css'
const data = [
    {id:'1',txt:'首页',to:'/'},
    {id:'2',txt:'mod集合',to:'/modpage'},
    {id:'3',txt:'游戏攻略',to:'/strategy'},
    {id:'4',txt:'游戏社区',to:'/comment'}
]
function Nav(props){
    const {pathname} = useLocation();
    
    const [menuList,setMenuList] = useState(data) 
    const [current,setCurrent] = useState('')

    useEffect(()=>{
        const {id} = menuList.find(item=>item.to==pathname)||'';
      
        setCurrent(id)
    })
    return <Menu 
                mode="horizontal" 
                theme="dark" 
                selectedKeys={[current]}
                style={{backgroundColor:'#2A2A2A'}}
            >
            {
                menuList.map(item=>{
                    return <Menu.Item 
                   
                    key={item.id} onClick={()=>{
                        setCurrent(item.id)
                    }} >
                            <NavLink activeClassName={current==item.id?style.menuActive:''} to={item.to}>{ item.txt }</NavLink>
                    </Menu.Item>
                })
            }

    </Menu> 
}
export default Nav