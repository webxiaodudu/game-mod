 const loginReducer = (isLogin =false,action)=>{
     switch (action.type) {
         case 'setLogin':
             return true
        default: 
             return false
     }
   
}
export {loginReducer}