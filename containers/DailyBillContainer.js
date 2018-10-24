import {connect} from 'react-redux'
import DailyBill from "../components/DailyBill";
import {getBillByCustomer, getBillDate} from "../reducers/dailyBill";

const mapStateToProps = state => {
  return {
    billItems: getBillByCustomer(state, 0),
    date: getBillDate(state)
  }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyBill)
