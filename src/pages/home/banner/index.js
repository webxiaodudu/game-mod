 import { useState,useEffect,useRef } from 'react'
 import { Button, Carousel } from 'antd';
 import { DoubleRightOutlined,DoubleLeftOutlined   } from '@ant-design/icons';

 import style from './index.module.css'


 function Banner(){
    
    const data = [
        {id:'1',bigImgUrl:'images/bg-epic-battles.jpg',bannertitle:'罗马全战',subtit:'回到罗马复兴时期，重振罗马军团！',info:'最新免费公测领取',logo:'images/wd3_logo.png'},
        {id:'2',bigImgUrl:'images/0159.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/fc6_logo.png'},
        {id:'3',bigImgUrl:'images/0026.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/GRB_llogo.png'},
        {id:'4',bigImgUrl:'images/0070.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/jdc_logo.png'},
        {id:'5',bigImgUrl:'images/0082.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/original_1568607610.png'},
        {id:'6',bigImgUrl:'images/0149.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/ORP_logo.png'},
        {id:'7',bigImgUrl:'images/0199.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/pop_logo.png'},
        {id:'8',bigImgUrl:'images/0587.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/mad_logo.png'},
        {id:'9',bigImgUrl:'images/0666.jpg',bannertitle:'抗美援朝',subtit:'雄赳赳气昂昂，跨过鸭绿江！！',info:'2020-12-30开始出售',logo:'images/store_logo.png'}
    ]

    let [bannerList,setBannerList] = useState([]);
    const oCarousel = useRef()
    useEffect(()=>{
        setBannerList(data)
    },[])
    
    

    return <div className={style.bannerBox}>
                <Carousel autoplay ref={oCarousel}>
                    {
                        bannerList.map((banner,index)=>{
                            return <div className={style.bannerWrap} key={banner.id} >
                                        <div className={style.bigImg}  style={{backgroundImage:`url(${banner.bigImgUrl})`}}>
                                            <div className={style.bannerInfo}>
                                                <h2 className={style.bannerTile} >{banner.bannertitle}</h2>
                                                <p className={style.subtit}>{banner.subtit}</p>
                                                <p className={style.info}>{banner.info}</p>
                                                <Button size='large' icon={<DoubleRightOutlined/>} type="dashed" ghost style={{marginTop:'30px'}}>了解详情</Button>
                                            </div>
                                            
                                        </div>
                                    </div>
                        })
                    }
                    
                </Carousel>
                <DoubleLeftOutlined className={style.leftBtn} onClick={()=>{
                    oCarousel.current.prev()
                }}/>
                <DoubleRightOutlined className={style.rightBtn} onClick={()=>{
                    oCarousel.current.next()
                }}/>
           </div>
}

export default Banner