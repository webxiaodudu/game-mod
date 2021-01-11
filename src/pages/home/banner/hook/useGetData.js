import {getBannerListApi} from '@/api/home'
function useGetData(setBannerList){
  return async ()=>{
    try {
      const { data:res } = await getBannerListApi({limit:'5'})
      if(res.code==0){
        if(res.data.list.length){
           const list = res.data.list
           setBannerList(list)
        }
        else{
         setBannerList([])
        }
       
      }
    } catch (error) {
      console.log('报错：',error)
    }
   
   
  }
}
export default useGetData