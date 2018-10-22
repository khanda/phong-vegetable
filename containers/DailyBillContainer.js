import {connect} from 'react-redux'
import DailyBill from "../components/DailyBill";
import {getBillByCustomer} from "../reducers/dailyBillReducer";

const DailyBillContainer = (dailyBillItems) => {
  return dailyBillItems || [];
};

const mapStateToProps = state => {
   return {
    dailyBillItems: getBillByCustomer(state, 0)
  }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyBill)
