import {combineReducers, createStore} from "redux";
import {loginReducer as isLogin} from "./reducer/loginReducer"
const reducer = {
  isLogin,
}

export default createStore(combineReducers(reducer))