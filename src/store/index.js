import {combineReducers, createStore} from "redux";
import {loginReducer as isLogin} from "./reducer/loginReducer"
import {pcCommentReducer as pcCommentData } from './reducer/pcCommentReducer'
const reducer = {
  isLogin,
  pcCommentData
}

export default createStore(combineReducers(reducer))