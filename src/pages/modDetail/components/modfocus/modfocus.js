import { useState } from 'react';
import style from './index.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectCoverflow,Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
SwiperCore.use([EffectCoverflow]);
SwiperCore.use([Autoplay]);
function ModForcus(props){
    const { imgsData=[] }=props
    return <div className={style.ModForcus}>
            <h2 className={style.title}>游戏截图</h2>
             <Swiper
                
                effect="coverflow"
                slidesPerView='3'
                autoplay={{
                    delay: 2500,
                }}
                coverflowEffect={
                    {
                        depth: 300,
                        slideShadows:true,
                        
                    }
                }   
             
                loop ={true}    
                grabCursor={true}
            >
                {
                    imgsData.map((item,index)=>{
                        return <SwiperSlide key={index}><div className={style.item} style={{backgroundImage:`url(${item.imgname})`}}></div></SwiperSlide>
                    })
                }
                {/* <SwiperSlide><div className={style.item} style={{backgroundImage:`url(${require('../../../../asset/images/0070.jpg').default})`}}></div></SwiperSlide>
                <SwiperSlide><div className={style.item} style={{backgroundImage:`url(${require('../../../../asset/images/0082.jpg').default})`}}></div></SwiperSlide>
                <SwiperSlide><div className={style.item} style={{backgroundImage:`url(${require('../../../../asset/images/0082.jpg').default})`}}></div></SwiperSlide> */}
            </Swiper>
        </div>
}
export default ModForcus