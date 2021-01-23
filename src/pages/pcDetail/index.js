import { Fragment} from 'react' 
import Header from '@/components/header'
import { Affix, Row, Col } from 'antd'
import style from './index.module.css'
function PcGameDetail(props){
     return<Fragment>
            <Affix offsetTop={0}>
                <Header/>
            </Affix>
            <div className={style.bg}>  
                <div className={style.topWrap}>
                    <Row>
                        <Col span={6}>
                            <div className={style.tlBox}>
                            tlBox
                            </div>
                        </Col>
                        <Col span={12}>
                        <div className={style.tcBox}>
                        tcBox
                            </div>
                        </Col>
                        <Col span={6}>
                        <div className={style.trBox}>
                        trBox
                        </div>
                        </Col>
                    </Row>
                </div>    
            </div>
        </Fragment>
}
export default PcGameDetail