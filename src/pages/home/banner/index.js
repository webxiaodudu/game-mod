 import { useState,useEffect,useRef } from 'react'
 import { Button, Carousel } from 'antd';
 import { DoubleRightOutlined,DoubleLeftOutlined   } from '@ant-design/icons';
import useGetData from './hook/useGetData'
 import style from './index.module.css'


 function Banner(){
    

    let [bannerList,setBannerList] = useState([]);
    const getBannerData = useGetData(setBannerList)

    const oCarousel = useRef()

    useEffect(()=>{
        getBannerData()
    },[])
    
    

    return <div className={style.bannerBox}>
                <Carousel autoplay ref={oCarousel}>
                    {
                        bannerList.map((banner,index)=>{
                            return <div className={style.bannerWrap} key={banner.id} >
                                        <div className={style.bigImg}  style={{backgroundImage:`url(${banner.img})`}}>
                                            <div className={style.bannerInfo}>
                                                <h2 className={style.bannerTile} >{banner.title}</h2>
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