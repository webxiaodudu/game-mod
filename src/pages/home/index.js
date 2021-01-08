import Header from '@/components/header'
import Banner from './banner'
import { Affix } from "antd";
function IndexPage(props){
    return <div>
       <Affix offsetTop={0}>
            <Header />
       </Affix>
       <Banner/>
    </div>
}
export default IndexPage