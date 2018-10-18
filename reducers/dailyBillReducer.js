import _ from 'lodash'

var initState = {
  items: [],
  currentBill: {},
  savedBill: {},
};

const dailyBillReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DAILY_BILL_CHANGED':
      var items = [
        {_id: 1, name: 'Hành', quantity: 12},
        {_id: 2, name: 'Tỏi', quantity: 2},
        {_id: 3, name: 'Bí', quantity: 3},
        {_id: 4, name: 'Ngô', quantity: 33},
        {_id: 5, name: 'Su su', quantity: 33},
        {_id: 6, name: 'Mùi', quantity: 33},
        {_id: 7, name: 'Cà rốt', quantity: 33},
      ];

      return {
        items: items
      };

    case 'SAVE_BILL':
      const temp = _.clone(state);
      temp.savedBill = action.bill;
      return temp;
    default:
      return state
  }
};

export default dailyBillReducer
