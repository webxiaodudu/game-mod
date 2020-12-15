
import { Layout ,Row, Col} from 'antd';
import RouterView  from "./routes";
import Logo from './components/logo'
import Nav from './components/nav'

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
                           
                        </Col>
                    </Row>
                </div>
                
           </Header>
            <Content className="mainbody">
                <RouterView />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )


}
export default App;
