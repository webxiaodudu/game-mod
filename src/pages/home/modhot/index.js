import { useState } from 'react'
import style from './index.module.css'
import { Tabs, Button } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

import ModList from './components/modList'

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
    const [tabList,setTabList]=useState(initlizeTabList)

    const operations = <Button size='large' type="link" style={{color:'#1890ff'}}>更多Mod<DoubleRightOutlined /></Button>;

    return <div className={style.modHot}>
            <h2 className={style.modHotTitle}><span style={{color:'red'}}>热门</span>单机mod榜</h2>
            <Tabs tabBarExtraContent={operations} centered>
                {
                    tabList.map((item,index)=>{
                        return  <TabPane tab={item.text} key={item.id}>
                                  <ModList />
                                </TabPane>
                    })
                }
                
            </Tabs>
         </div>
}
export default ModHot;