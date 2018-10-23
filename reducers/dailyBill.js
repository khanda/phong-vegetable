import _ from 'lodash'

const initBill = [
  {_id: 1, name: 'Hành', quantity: 0},
  {_id: 2, name: 'Tỏi', quantity: 0},
  {_id: 3, name: 'Dưa chuột', quantity: 0},
  {_id: 4, name: 'Cà rốt', quantity: 0},
  {_id: 5, name: 'Cà tím', quantity: 0},
  {_id: 6, name: 'Bí', quantity: 0},
  {_id: 7, name: 'Khoai tây', quantity: 0},
  {_id: 8, name: 'Mùi', quantity: 0},
  {_id: 9, name: 'ớt', quantity: 0},
  {_id: 10, name: 'Ngô', quantity: 0},
  {_id: 11, name: 'Thì là', quantity: 0},
  {_id: 12, name: 'Cam', quantity: 0},
];


var initialState = {
  loading: false,
  error: null,
  bill: [
    {_id: 1, name: 'Hành', quantity: 0},
    {_id: 2, name: 'Tỏi', quantity: 0},
    {_id: 3, name: 'Dưa chuột', quantity: 0},
    {_id: 4, name: 'Cà rốt', quantity: 0},
    {_id: 5, name: 'Cà tím', quantity: 0},
    {_id: 6, name: 'Bí', quantity: 0},
    {_id: 7, name: 'Khoai tây', quantity: 0},
    {_id: 8, name: 'Mùi', quantity: 0},
    {_id: 9, name: 'ớt', quantity: 0},
    {_id: 10, name: 'Ngô', quantity: 0},
    {_id: 11, name: 'Thì là', quantity: 0},
    {_id: 12, name: 'Cam', quantity: 0},
  ],
  editingBill: _.clone(initBill)
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BILL_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'ADD_BILL_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload]
      };
    case 'ADD_BILL_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case 'CHANGE_BILL_ITEM':
      var cloneState = _.clone(state);

      cloneState.editingBill.forEach(function (item) {
        if (item._id == action._id) {
          item.quantity = Number(action.value);
        }
      });
      return cloneState;

    case 'INCREASE_BILL_ITEM':
      var cloneState = _.clone(state);

      cloneState.editingBill.forEach(function (item) {
        if (item._id == action._id) {
          item.quantity = Number(item.quantity) + Number(action.intValue);
        }
      });
      return cloneState;
    default:
      return state;
  }
}

export const getBillByCustomer = (state, customerId) => state.bill || initialState.bill;
export const getEditingBillByCustomer = (state, customerId) => state.editingBill || initialState.editingBill;

