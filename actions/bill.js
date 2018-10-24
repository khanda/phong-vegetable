import DB from "../DB";
import Bill from "../entity/Bill";

/**
 * ADD BILL
 */

/**
 *
 * @param bill
 * @param customerId
 * @returns {function(*, *)}
 */
export const addBill = (goods, customer) => {
  console.log(customer);
  return (dispatch, getState) => {
    dispatch(addBillStarted());
    var billEntity = new Bill(customer._id, goods);
    DB.bills.add(billEntity, function (added_data) {
      dispatch(addBillSuccess(added_data));

      DB.bills.get({"customerId": customer._id}, function (result) {
        console.log(result);
      })
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
    dispatch(changeBillDate(date));
    dispatch(getBillStarted());
    DB.bills.get_all(function (result) {
      console.log(result);
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