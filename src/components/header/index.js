import { useState,useEffect }from 'react'
import { useDispatch} from 'react-redux'
import { Layout ,Row, Col} from 'antd';
import Logo from '../logo'
import Nav from '../nav'
import Login from '../login'
import User from '../user'
const { Header } = Layout

export default function HeaderComponent(){
    const token = localStorage.getItem('jwt')||''
    const [isLogin,setLoginState] = useState(token) 
    const dispatch = useDispatch();
    useEffect(()=>{
        if(isLogin){
            dispatch({type:'setLogin'})
        }
        else{
            dispatch({type:''})
        }
        
    },[isLogin])
    return <div>
        <Header>
                <div className="header-wrap">
                    <Row>
                        <Col span={6}>
                            <Logo />     
                        </Col>
                        <Col span={14}>
                            <Nav />
                        </Col>
                        <Col span={4}>
                           {isLogin ? <User setLoginState={setLoginState} />: <Login setLoginState={setLoginState}/>}
                        </Col>
                    </Row>
                </div>
           </Header>
    </div>
}