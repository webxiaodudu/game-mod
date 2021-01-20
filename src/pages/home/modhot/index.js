import { useState ,useEffect} from 'react'
import style from './index.module.css'
import { Tabs, Button } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

import ModList from './components/modList'

import { useGetModData } from './hook/index'

const { TabPane } = Tabs;
function ModHot (props){

    const initlizeTabList = [
        {id:'1',text:'射击'},
        {id:'2',text:'动作冒险'},
        {id:'3',text:'角色扮演'},
        {id:'4',text:'即时战略'},
        {id:'5',text:'竞速'},
        {id:'6',text:'体育'},
        {id:'7',text:'模拟'},
        {id:'8',text:'策略'},
    ]
    //初始化tab
    const [tabList,setTabList]=useState(initlizeTabList)
 
    //初始化当前页签id
    const [currentId,setCurrentId] = useState('1');
    //请求条数
    const [limit,setLimit] = useState(10)
    //获取数据
   const {data,getData} = useGetModData(currentId)

   useEffect(() => {
     getData(limit,currentId)
   },[currentId]);

   const onTabClick=(key)=>{
    setCurrentId(key)
   }

    const operations = <Button size='large' type="link" style={{color:'#1890ff'}}>更多Mod<DoubleRightOutlined /></Button>;

    return <div className={style.modHot}>
            <h2 className={style.modHotTitle}><span style={{color:'red'}}>热门</span>单机mod榜</h2>
            <Tabs tabBarExtraContent={operations} centered onTabClick={onTabClick}>
                {
                    tabList.map((item,index)=>{
                        return  <TabPane tab={item.text} key={item.id}>
                                  <ModList data={data}/>
                                </TabPane>
                    })
                }
                
            </Tabs>
         </div>
}
export default ModHot;