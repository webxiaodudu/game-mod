export default function login(state={isLogin:false,userInfo:null},action){

    switch(action.type){
        case 'Logined':
            return {
                isLogin:true,
                userInfo:action.userInfo
            }
            break;
        case 'LoginOut':
            return {
                isLogin:false,
                userInfo:null
            }
            break;
        default:
            return state
    }

}