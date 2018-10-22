import {connect} from 'react-redux'
import {getCustomers} from "../reducers/customer";
import CustomerList from "../components/CustomerList";
import {selectCustomer} from "../actions";


const mapStateToProps = state => {
  return {
    customers: getCustomers(state)
  }
};

const mapDispatchToProps = dispatch => ({
  selectCustomer: _id => dispatch(selectCustomer(_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)
