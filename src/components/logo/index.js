import { GoogleOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
import style from './index.module.css'
function Logo() {
    return <h1>
        <Link to="/">
            <GoogleOutlined style={{ fontSize: '50px', color: '#F5DF33', lineHeight: '64px' }} />
            <span className={style.title}>王牌军MOD资源网</span>
        </Link>
    </h1>
}
export default Logo