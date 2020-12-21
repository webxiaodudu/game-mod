import {Fragment} from 'react'
import { Form, Input, Button,Radio ,Steps,DatePicker,InputNumber  } from 'antd';
import style from './index.module.css'
import { Route } from 'react-router-dom'
import  BaseInfo  from "./baseInfo";
import PersonalInfo from './personal'
import Finish from './finishRegister'
import useChangeStep from './hooks'
const { Step } = Steps
const { TextArea } = Input;
export default function Regesiter(props){
   
    const {current,setCurrent} = useChangeStep() 
      
    return(
    <Fragment>
        <div className={style.stepWrap}>
            <Steps current={current} size='small'>
                <Step title="注册验证"  />
                <Step title="基本资料"  />
                <Step title="完成注册"  />
            </Steps>  
        </div>
        
        <Route 
            exact={true} 
            path="/regesiter"
            render={(routerProps)=>{
                return <BaseInfo {...routerProps} setCurrent={setCurrent}  />
            }} 
         />
        <Route  
            path="/regesiter/person"
            render={(routerProps)=><PersonalInfo {...routerProps}  setCurrent={setCurrent}/>}
        />
        <Route  path="/regesiter/finish" component={Finish} />
    
    </Fragment>)
}
