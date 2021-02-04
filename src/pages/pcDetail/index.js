import { Fragment,useEffect} from 'react' 
import Header from '@/components/header'
import { Affix, Row, Col } from 'antd'
import style from './index.module.css'
import DownLoad from './components/downLoad/downLoad.js'
import Describ from './components/pcdescrib'
import UserScore from './components/userScore'
import PicShow from './components/picshow'
import Comment from './components/comment/index'
function PcGameDetail(props){
    useEffect(()=>{
        document.documentElement.scrollTop=0+'px'
    },[])
     return<Fragment>
            <Affix  offsetTop={0}>
                <Header/>
            </Affix>
            <div className={style.bg}>  
                <div className={style.topWrap}>
                    <Row>
                        <Col span={6}>
                            <div className={style.tlBox}>
                            <DownLoad />
                            </div>
                        </Col>
                        <Col span={12}>
                        <div className={style.tcBox}>
                                <Describ/>
                        </div>
                        </Col>
                        <Col span={6}>
                        <div className={style.trBox}>
                            <UserScore/>
                        </div>
                        </Col>
                    </Row>
                </div> 
                <div className={style.cbg}>
                    <PicShow />
                </div>
                <div className={style.bottomBg}>
                        <Row>
                            <Col span={16}>
                                <Comment/>
                            </Col>
                            <Col span={8}></Col>
                        </Row>

                </div>   
            </div>
        </Fragment>
}
export default PcGameDetail