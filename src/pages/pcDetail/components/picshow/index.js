import style from './index.module.css'
import { Row , Col} from 'antd'
import { PictureOutlined } from '@ant-design/icons'
function PicShow(){

    return <div className={style.picshow}>
        <Row gutter={32}>
          <Col span={18}>
            <div className={style.bigPic} style={{backgroundImage:`url(${require('../../../../asset/images/0070.jpg').default})`}}></div>
          </Col>
          <Col  span={6}>
          <div className={style.rightWrap}>
                <div className={style.title}>
                    <h2><PictureOutlined style={{marginRight:'10px'}}/><span>游戏图集</span></h2>
                    <div className={style.scrollWrap}>
                      <ul className={style.smallList}>
                        <li className="active" style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                        <li  style={{backgroundImage:`url(${require('../../../../asset/images/0026.jpg').default})`}}></li>
                      </ul>
                    </div>
                </div>
          </div>
          </Col>
    </Row>
    </div>
}
export default PicShow;