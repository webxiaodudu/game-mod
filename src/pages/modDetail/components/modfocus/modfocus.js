import { Carousel } from 'antd';
import style from './index.module.css'

function ModForcus(props){
    return <div className={style.ModForcus}>
            <h2 className={style.title}>游戏截图</h2>
            <Carousel autoplay>
                <div>
                    <div className={style.item} style={{backgroundImage:`url(${require('../../../../asset/images/0070.jpg').default})`}}></div>
                </div>
                <div>
                    <div className={style.item} style={{backgroundImage:`url(${require('../../../../asset/images/0082.jpg').default})`}}></div>
                </div>
        </Carousel>,
        </div>
}
export default ModForcus