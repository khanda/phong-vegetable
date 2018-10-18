import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dailyBillReducer from "./dailyBillReducer";

export default combineReducers({
  todos,
  visibilityFilter,
  dailyBillReducer,
})
