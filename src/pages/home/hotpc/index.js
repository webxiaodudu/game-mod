import { Card } from 'antd';
import style from './index.module.css'

const { Meta } = Card;

function HotPC(props){
    
    return <div className={style.hotpc}>
                <h2 className={style.hotpcTitle}><span style={{color:'red'}}>热门</span>单机推荐</h2>
                <ul className={style.hotList}>
                    <li>
                   
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'images/0159.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'images/0026.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'images/0070.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'images/0149.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" style={{height:80}}/>
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'images/0587.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.comasdaa按时打奥撒所大sdasdassdadasd" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'https://img.alicdn.com/i3/109271711/O1CN01udNcOL1OVgDMUwsyL_!!109271711.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.comasdaa按时打奥撒所大sdasdassdadasd" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2063645036,694054499&fm=26&gp=0.jpg'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.comasdaa按时打奥撒所大sdasdassdadasd" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.netbian.com%2Ffile%2F2016%2F1117%2F3df172db360b776d9fd386df8b18bf3a.jpg&refer=http%3A%2F%2Fimg.netbian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612796735&t=8dc6c45fd73924b9d5e84ddc95d2057c'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.comasdaa按时打奥撒所大sdasdassdadasd" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.bbra.cn%2F%28S%281jwah445ggf5ge55piohze45%29%29%2FUploadfiles%2Fimgs%2F2013%2F12%2F09%2Fka3%2FXbzs_007.jpg&refer=http%3A%2F%2Fwww.bbra.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612796788&t=5768e6358c3706831f6b4b124f037dd5'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.comasdaa按时打奥撒所大sdasdassdadasd" style={{height:80}} />
                    </Card>
                    </li>
                    <li>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<div className={style.cover} style={{backgroundImage:`url(${'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-13%2F5a30d0aa8b0fa.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612796934&t=ce59417f011968d65bc2eb5bc701f4f7'})`}}></div>}
                    >
                        <Meta title="Europe Street beat" description="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-13%2F5a30d0aa8b0fa.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612796934&t=ce59417f011968d65bc2eb5bc701f4f7" style={{height:80}} />
                    </Card>
                    </li>
                </ul>
            </div>
}
export default HotPC;