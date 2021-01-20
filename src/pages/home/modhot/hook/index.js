import { getModListApi } from '@/api/home'
import { useState } from 'react'
function useGetModData(){
      //初始化列表数据
      const [data,setData] = useState([])
    
      const  getData = async (limit,current)=>{
          try {
            const {data:res} =  await getModListApi({limit,type:current})
            console.log(res.data,'  getModListApi-res')
            setData(res.data)
          } catch (error) {
              
          }
          

      }

      return {
        data,
        getData
      }
}

export {
    useGetModData
}