import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dailyBillReducer, * as fromBillReducer from "./dailyBillReducer";

export default combineReducers({
  todos,
  visibilityFilter,
  dailyBillReducer
})

const getBillByCustomer = (state, id) => fromBillReducer.getBillByCustomer(state.dailyBillReducer, id);
const getEditingBillByCustomer = (state, id) => fromBillReducer.getEditingBillByCustomer(state.dailyBillReducer, id);