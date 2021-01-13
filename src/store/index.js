import {combineReducers, createStore} from "redux";
import {testReducer} from "./reducer/test"
const reducer = {
  test:testReducer,
}

export default createStore(combineReducers(reducer))