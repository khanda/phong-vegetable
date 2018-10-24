import {connect} from 'react-redux'
import DailyBill from "../components/DailyBill";
import {getBillByCustomer, getBillDate, getShowAdd} from "../reducers/dailyBill";
import {getSelectedCustomer} from "../reducers/customer";

const mapStateToProps = state => {
  return {
    billItems: getBillByCustomer(state, 0),
    date: getBillDate(state),
    customer: getSelectedCustomer(state),
    isShowAddMsg: getShowAdd(state),
  }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyBill)
