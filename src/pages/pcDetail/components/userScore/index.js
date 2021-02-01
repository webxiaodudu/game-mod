import style from './index.module.css'
import { Row, Col } from 'antd';
function UserScore(){
    return  <div className={style.userScore}>
        <Row gutter={24}>
            <Col span={10}>
                <div className={style.score}>
                    <span>9.3</span>
                    <em>用户平均评分</em>
                </div>
            </Col>
            <Col span={14}>
                <ul className={style.barList}>
                    <li>
                        <span>画面</span>
                        <em><span className={style.bar1}></span></em>
                        <span>10</span>
                    </li>
                    <li>
                        <span>剧情</span>
                        <em><span className={style.bar2}></span></em>
                        <span>10</span>
                    </li>
                    <li>
                        <span>音效</span>
                        <em><span className={style.bar3}></span></em>
                        <span>10</span>
                    </li>
                    <li>
                        <span>乐趣</span>
                        <em><span className={style.bar4}></span></em>
                        <span>10</span>
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
}
export default UserScore