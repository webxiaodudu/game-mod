 import { useState,useEffect } from 'react'
 import style from './index.module.css'
 function Banner(){

    let [imgUrl,setImgUrl] = useState('');
    useEffect(() => {
        setImgUrl('images/bg-epic-battles.jpg')
    },[]);

    return <div className={style.bannerWrap} style={{backgroundImage:`url(${imgUrl})`,}}>
               
           </div>
}

export default Banner