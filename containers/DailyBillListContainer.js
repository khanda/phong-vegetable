import {connect} from 'react-redux'
import DailyBillList from "../components/DailyBillList";
import {getBillByCustomer} from "../reducers/dailyBillReducer";

const DailyBillListContainer = (dailyBillItems) => {
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
)(DailyBillList)
