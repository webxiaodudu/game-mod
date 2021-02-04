import { Tag,Tabs  } from 'antd'
import style from './index.module.css'
const { TabPane } = Tabs;
function Describ(){

    const callback = (key)=>{
        console.log(key);
    }
    return <div className={style.describ}>
            <div className={style.platform}>
                <Tag color="#3a3a3a">PC游戏平台</Tag>
            </div>
            <h2 className={style.name}>中土战争3：五军之战</h2>
            <div className={style.subname}>The Battle for Middle-earth 3: The Battle of the Five Armies</div>
            <div className={style.startTime}>
                <span>上市时间：2020-12-30</span>
            </div>
            <ul className={style.infoBase}>
                <li>游戏类型:射击</li>
                <li>游戏语言：英文</li>
                <li>制作公司：WB games</li>
            </ul>
            
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="游戏简介" key="1">
                <div>
                    《中土战争3：五军之战》基于《霍比特人》三部曲开发，该作将有线下线上两种模式，大量《魔戒》中的元素将会使你有着电影版的体验。

　　                在游戏中玩家还可以控制索伦和他的军团通过实时动态地图在中土世界征战，线上模式允许你选择属于自己的阵营，《中土战争3：五军之战》将回到大家最喜爱的刚铎、罗翰、魔多和艾森加德，除此之外还将加入刚达巴、多尔戈多等新地点。
                </div>
                </TabPane>
                <TabPane tab="安装说明" key="2">
                <div>
                    安装说明：啥啥
                </div>
                </TabPane>
            </Tabs>
    </div>
}
export default Describ