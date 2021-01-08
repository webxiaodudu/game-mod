import { useSelector } from 'react-redux'
import { Layout ,Row, Col} from 'antd';
import Logo from '../logo'
import Nav from '../nav'
import Login from '../login'
import User from '../user'

const { Header } = Layout

export default function HeaderComponent(){
    const isLogin = useSelector(state=>state.login.isLogin)
    
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
                           {isLogin ? <User />: <Login />}
                        </Col>
                    </Row>
                </div>
           </Header>
    </div>
}