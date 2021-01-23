import style from './index.module.css'
import { StarFilled, } from '@ant-design/icons';
import {Button ,message} from "antd"
import {useMemo} from 'react'
function ModBaseInfo(props){
   const { baseData } = props
    

   if(!baseData)return ''

   const {author='',original='',star='',type='',uptime='',download='',password='',modname=''} = baseData
    const computedStar =()=>{
        const arr = []
            if(star){
                for(let i=0;i<star*1;i++){
                    arr.push(<StarFilled key={i} style={{marginRight:'5px'}}/>)
                }
            }
           
        return arr
    }

   const downloadFn=()=>{
       const jwt = localStorage.getItem('jwt')
       if(jwt){
            window.location.href=download
       }
       else{
        message.error('请登录后，再点击下载！')
       }
   }

    return <div className={style.modInfo}>
        <h2 className={style.title}> 基本参数 </h2>
        <ul className={style.list}>
            <li><span className={style.label}>模组名称</span>：<span className={style.val}>{modname}</span></li>
            <li><span className={style.label}>更新时间</span>：<span className={style.val}>{uptime}</span></li>
            <li><span className={style.label}>作    者</span>：<span className={style.val}>{author}</span></li>
            <li><span className={style.label}>所属游戏</span>：<span className={style.val}>{original}</span></li>
            <li><span className={style.label}>游戏评分</span>：<span className={style.val+' '+style.star}>{computedStar()}</span></li>
        </ul>
        <p className={style.download}> 
            <Button type="primary" danger onClick={downloadFn}>百度网盘下载</Button>
            {password?<Button  type="dashed" danger style={{marginLeft:'10px'}}>密码：{password}</Button>:''}
        </p>
  
    </div>
}
export default ModBaseInfo