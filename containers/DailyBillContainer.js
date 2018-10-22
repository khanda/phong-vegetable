import {connect} from 'react-redux'
import DailyBill from "../components/DailyBill";
import {getBillByCustomer} from "../reducers/dailyBillReducer";

const DailyBillContainer = (dailyBillItems) => {
  return dailyBillItems || [];
};

const mapStateToProps = state => {
  var list = getBillByCustomer(state, 0);
  console.log(list);
  return {
    dailyBillItems: list
  }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyBill)
