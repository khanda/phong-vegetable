export const selectCustomer = (_id) => {
  return (dispatch, getState) => {
    dispatch(selectCustomerStart(_id));
  };
};

const selectCustomerStart = _id => ({
  type: 'SELECT_CUSTOMER_START',
  _id
});

