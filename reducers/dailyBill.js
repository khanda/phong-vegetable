import _ from 'lodash'
import NavigationService from "../navigation/NavigationService";
import {Toast} from 'native-base';

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

export default function dailyBillReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BILL_STARTED':
      console.log('ADD_BILL_STARTED');
      return {
        ...state,
        loading: true
      };
    case 'ADD_BILL_SUCCESS':
      Toast.show({
        text: 'Thành công',
        buttonText: 'Ok',
        duration: 3000
      });
      NavigationService.navigate('DailyBill');
      return {
        ...state,
        loading: false,
        error: null,
        editingBill: initBill
      };
    case 'ADD_BILL_FAILURE':
      Toast.show({
        text: 'Xảy ra lỗi',
        duration: 10000
      });
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
export const isLoading = (state) => state.dailyBillReducer.loading || false;