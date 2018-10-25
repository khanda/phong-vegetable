import DB from "../DB";
import Bill from "../entity/Bill";

/**
 * ADD BILL
 */

/**
 *
 * @returns {function(*, *)}
 * @param goods
 * @param customer
 * @param date
 */
export const addBill = (goods, customer, date) => {
  return (dispatch, getState) => {
    dispatch(addBillStarted());
    const billEntity = new Bill(customer._id, goods, date);
    DB.bills.add(billEntity, function (added_data) {
      dispatch(addBillSuccess(added_data));
      console.log(added_data);
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
 * @param customer
 * @returns {function(*, *)}
 */
export const getBill = (date, customer) => {
  console.log(date);
  console.log(customer);
  return (dispatch, getState) => {
    dispatch(changeBillDate(date));
    dispatch(getBillStarted());
    DB.bills.get({"customerId": customer._id},
      function (result) {
        const bill = result && result.length > 0 ? result[0].goods : [];
        dispatch(getBillSuccess(bill));
      })
  };
};

export const changeBillDate = (date, customer) => ({
  type: 'CHANGE_BILL_DATE',
  date,
  customer
});
const getBillStarted = () => ({
  type: 'GET_BILL_STARTED'
});
const getBillSuccess = bill => ({
  type: 'GET_BILL_SUCCESS',
  bill
});
const getBillFailure = error => ({
  type: 'GET_BILL_FAILURE',
  payload: {
    error
  }
});
export const resetFilterBillForm = () => ({
  type: 'RESET_BILL_FILTER_FORM'
});
export const onEditBill = (bill) => ({
  type: 'ON_EDIT_BILL',
  bill
});