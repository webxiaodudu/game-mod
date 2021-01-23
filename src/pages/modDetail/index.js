import { useParams } from 'react-router-dom'
import Header from '@/components/header'
import { Affix , Row, Col} from "antd";
import style from './index.module.css'
import ModForcus from './components/modfocus/modfocus'
import ModBaseInfo from './components/modBaseInfo/modBaseInfo'
import ModDescrib from './components/modDescrib'
import {useModDetail} from './hook'
import { useEffect } from 'react'

function ModDetail(props){
    const { id } = useParams();
    const {imgList,listInfo,baseData,getDetailData} = useModDetail(id)
    
    useEffect(()=>{
        getDetailData()
    },[])

    return <div className={style.bg}>
                <Affix style={{zIndex:20000}}>
                    <Header />
                </Affix>
                <div className={style.topRow}>
                    <Row >
                        <Col span={24}>
                            <ModForcus imgsData={imgList}/>
                            <ModBaseInfo baseData={baseData}/>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24}>
                            <ModDescrib dataList={listInfo}/>
                        </Col>
                    </Row>
                </div>
            
            </div>
}

export default ModDetail;