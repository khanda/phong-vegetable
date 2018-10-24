import {resetBill, resetDefaultBillDate} from "./bill";

export const selectCustomer = (_id) => {
  return (dispatch, getState) => {
    dispatch(resetDefaultBillDate());
    dispatch(resetBill());
    dispatch(selectCustomerStart(_id));
  };
};

const selectCustomerStart = _id => ({
  type: 'SELECT_CUSTOMER_START',
  _id
});

