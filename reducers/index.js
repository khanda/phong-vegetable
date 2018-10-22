import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dailyBillReducer from "./dailyBillReducer";
import customerReducer from "./customer";

export default combineReducers({
  todos,
  visibilityFilter,
  dailyBillReducer,
  customerReducer
})