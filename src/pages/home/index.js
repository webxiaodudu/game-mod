import Header from '@/components/header'
import Banner from './banner'
import HotPC from './hotpc'
import { Affix } from "antd";
function IndexPage(props){
    return <div>
       <Affix offsetTop={0}>
            <Header />
       </Affix>
       <Banner/>
       <HotPC />

    </div>
}
export default IndexPage