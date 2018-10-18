const dailyBillReducer = (state = [], action) => {
  switch (action.type) {
    case 'DAILY_BILL_CHANGED':
      var items = [
        {_id: 1, name: 'Hành', quantity: 12},
        {_id: 2, name: 'Tỏi', quantity: 2},
        {_id: 3, name: 'Bí', quantity: 3},
        {_id: 4, name: 'Ngô', quantity: 33},
      ];

      console.log(state);

      return items;
    default:
      return state
  }
};

export default dailyBillReducer
