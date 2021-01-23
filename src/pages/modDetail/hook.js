import request from '@/utils/request'
import {useState} from "react"
function useModDetail(id){
    const [imgList,setImgList] = useState([]);//焦点图数据
    const [listInfo,setListInfo] = useState([])
    const [baseData,setBaseData] = useState(null)
    const  getDetailData = async ()=>{
        try{
            const {data:res} = await request.get('/getModDetail',{params:{pid:id}})
            if(res.data){
                const {imgList,listInfo,author,original,star,type,uptime,download,password,modname} = res.data;
                setImgList(imgList)
                setListInfo(listInfo)
                setBaseData({author,original,star,type,uptime,download,password,modname})
            }
            
        }catch(error){
            console.log(error)
        }
      
    }

    return {
        imgList,
        listInfo,
        baseData,
        getDetailData
    }
}
export {
    useModDetail
}