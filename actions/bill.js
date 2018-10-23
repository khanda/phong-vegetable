import DB from "../DB";

export const addBill = (bill, customerId) => {
  return dispatch => {
    dispatch(addBillStarted());
    // console.log('current state:', getState());

    DB.todos.add(bill, function (added_data) {
      setTimeout(() => {
        dispatch(addBillSuccess(added_data));
      }, 2500);
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