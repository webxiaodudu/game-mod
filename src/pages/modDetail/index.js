import { useParams ,useLocation} from 'react-router-dom'
import Header from '@/components/header'
import { Affix , Row, Col} from "antd";
import style from './index.module.css'
import ModForcus from './components/modfocus/modfocus'
function ModDetail(props){
    const { id } = useParams();
        

    return <div className={style.bg}>
                <Affix>
                    <Header />
                </Affix>
                <div className={style.topRow}>
                    <Row >
                        <Col span={16}>
                            <ModForcus/>
                        </Col>
                        <Col span={8} >bbb</Col>
                    </Row>
                </div>
            
            </div>
}

export default ModDetail;