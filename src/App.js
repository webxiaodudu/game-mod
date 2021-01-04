
import { Layout ,Row, Col} from 'antd';
import Routes  from "./routes";


const { Header, Footer, Content } = Layout;

function App(props) {

    return (
        <Layout>
            
            <Content className="mainbody">
                <Routes />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )


}
export default App;
