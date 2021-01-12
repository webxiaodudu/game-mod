import {  getPCHotApi } from '@/api/home.js'
import { useState } from "react"
function  useGetPCHotListData (){
    const [hotList,setHotList] = useState([])
    const getData = async ()=>{
        //获取数据
        try{
            const {data:res} =  await getPCHotApi({limit:10})
            const { list } = res.data;
            console.log(list,' getData')
            if(list.length){
                setHotList(list)
            }
            else{
                setHotList([])
            }
        }
        catch(error){
            console.log('接口报错：', error)
        }
       
        
    }
    
    
    // setHotList(list)
      return {
          hotList,
          getData
      }
    
}
export default useGetPCHotListData