
import style from './index.module.css'
import { Divider ,Image  }from 'antd'
function ModDescrib(props){
    const {dataList} = props
    return <div className={style.descrbBox}>
        <h2 className={style.title}>Mod模组详情</h2>
        {
            dataList.map((item,index)=>{
                return <div key={index} className={style.item}>
                            <Divider orientation="left"><h3 className={style.descrbTit}>{item.title}</h3></Divider>
                            <div style={{paddingTop:'20px',paddingBottom:'20px',textAlign:'center'}}><Image  style={{margin:'0 auto',width:'500px'}} src={`${item.img}`}/></div>
                            <p className={style.descrb}>{item.info}</p>
                        </div>
            })
        }
        
      
        
    </div>

}
export default ModDescrib