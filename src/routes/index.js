import {Switch,Route } from 'react-router-dom'
import routes from './config'
function Routes(props) {
   console.log(11111111)
   return <Switch>
        {
            routes.map((item,index)=>{
                return <Route 
                    key={index}
                    path={item.path}
                    exact={item.exact} 
                    render={(RouterProp)=>{
                       return item.render({...RouterProp,...props})
                }}/>
            })
        }
    </Switch>
}
export default Routes