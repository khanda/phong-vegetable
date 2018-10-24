import DB from "../DB";

/**
 * ADD BILL
 */

/**
 *
 * @param bill
 * @param customerId
 * @returns {function(*, *)}
 */
export const addBill = (bill, customerId) => {
  return (dispatch, getState) => {
    dispatch(addBillStarted());
    // var state = getState();
    DB.bills.add(bill, function (added_data) {
      dispatch(addBillSuccess(added_data));
    })

    // axios
    //   .post(`https://jsonplaceholder.typicode.com/todos`, {
    //     title,
    //     userId,
    //     completed: false
    //   })
    //   .then(res => {
    //     dispatch(addBillSuccess(res.data));
    //   })
    //   .catch(err => {
    //     dispatch(addBillFailure(err.message));
    //   });
  };
};

const addBillSuccess = bill => ({
  type: 'ADD_BILL_SUCCESS',
  payload: {
    ...bill
  }
});

const addBillStarted = () => ({
  type: 'ADD_BILL_STARTED'
});

const addBillFailure = error => ({
  type: 'ADD_BILL_FAILURE',
  payload: {
    error
  }
});

export const changeBillItem = (_id, value) => ({
  type: 'CHANGE_BILL_ITEM',
  _id,
  value
});

export const increaseItem = (_id, intValue) => ({
  type: 'INCREASE_BILL_ITEM',
  _id,
  intValue
});

/**
 *  GET BILL
 */

/**
 *
 * @param date
 * @param customerId
 * @returns {function(*, *)}
 */
export const getBill = (date, customerId) => {
  return (dispatch, getState) => {
    dispatch(changeBillDate());
    dispatch(getBillStarted());
    DB.bills.get(date, function (added_data) {
      dispatch(getBillSuccess(added_data));
    })
  };
};

export const changeBillDate = (date, customerId) => ({
  type: 'CHANGE_BILL_DATE',
  date,
  customerId
});
const getBillStarted = () => ({
  type: 'GET_BILL_STARTED'
});
const getBillSuccess = bill => ({
  type: 'GET_BILL_SUCCESS',
  payload: {
    ...bill
  }
});
const getBillFailure = error => ({
  type: 'GET_BILL_FAILURE',
  payload: {
    error
  }
});