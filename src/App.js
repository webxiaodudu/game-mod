
import { Layout ,Row, Col} from 'antd';
import Routes  from "./routes";
import Logo from './components/logo'
import Nav from './components/nav'
import Login from './components/login'

const { Header, Footer, Content } = Layout;

function App(props) {

    return (
        <Layout>
            <Header>
                <div className="header-wrap">
                    <Row>
                        <Col span={6}>
                            <Logo />     
                        </Col>
                        <Col span={12}>
                            <Nav />
                        </Col>
                        <Col span={6}>
                           <Login />
                        </Col>
                    </Row>
                </div>
                
           </Header>
            <Content className="mainbody">
                <Routes />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )


}
export default App;
