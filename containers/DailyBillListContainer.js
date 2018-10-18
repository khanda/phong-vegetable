import {connect} from 'react-redux'
import DailyBillList from "../components/DailyBillList";

const DailyBillListContainer = (dailyBillItems) => {
  return dailyBillItems || [];
};

const mapStateToProps = state => {
  return {
    dailyBillItems: state.dailyBillReducer.items
  }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyBillList)
