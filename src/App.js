
import { Layout ,Row, Col} from 'antd';
import Routes  from "./routes";

import Footer from '@/components/footer'
const { Header, Content } = Layout;

function App(props) {

    return (
        <Layout>
            
            <Content className="mainbody">
                <Routes />
            </Content>
            <Footer/>
        </Layout>
    )


}
export default App;
