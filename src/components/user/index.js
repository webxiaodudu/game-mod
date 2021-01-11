import { useState } from 'react'
import { Avatar ,Menu, Dropdown} from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';

import style from './index.module.css'

export default function User(props){
    
  const { setLoginState } = props
   const name = localStorage.getItem('nickname')||''
   const [nickname, setNickName] = useState(name);
  
   
   const loginOut = () =>{
       
        localStorage.clear();
        setLoginState(false)
   }

   const menu = (
    <Menu>
      <Menu.Item key="0">
        个人中心
      </Menu.Item>
      <Menu.Item key="1">
        level 0
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={loginOut}>退出登录</Menu.Item>
    </Menu>
  );

    return <div>
          <Avatar
            style={{
                backgroundColor: '#87d068',
                marginRight:'10px'
            }}
            icon={<UserOutlined />}

        />
         <Dropdown overlay={menu} trigger={['click']}>
            <span className={style.nickname}>您好！{nickname} <DownOutlined /></span>
            
        </Dropdown>
    </div>
}