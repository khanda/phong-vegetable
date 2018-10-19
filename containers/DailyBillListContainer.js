import {connect} from 'react-redux'
import DailyBillList from "../components/DailyBillList";
import {getBillByCustomer} from "../reducers/dailyBillReducer";

const DailyBillListContainer = (dailyBillItems) => {
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
)(DailyBillList)
