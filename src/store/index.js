import {combineReducers, createStore} from "redux";
import login from "./reducer/login";
const reducer = {
    login
}
export default createStore(combineReducers(reducer))