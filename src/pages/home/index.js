import Header from '@/components/header'
import Banner from './banner'
import HotPC from './hotpc'
import ModHot from './modhot'
import { Affix } from "antd";
function IndexPage(props){
    return <div>
       <Affix offsetTop={0}>
            <Header />
       </Affix>
       <Banner/>
       <HotPC />
        <ModHot />
    </div>
}
export default IndexPage