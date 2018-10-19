var initState = {
  bill: [
    {_id: 1, name: 'Hành', quantity: 2},
    {_id: 2, name: 'Tỏi', quantity: 3},
    {_id: 3, name: 'Dưa chuột', quantity: 0},
    {_id: 4, name: 'Cà rốt', quantity: 1},
    {_id: 5, name: 'Cà tím', quantity: 1},
    {_id: 6, name: 'Bí', quantity: 5},
    {_id: 7, name: 'Khoai tây', quantity: 1},
    {_id: 8, name: 'Mùi', quantity: 1},
    {_id: 9, name: 'ớt', quantity: 3},
    {_id: 10, name: 'Ngô', quantity: 3},
    {_id: 11, name: 'Thì là', quantity: 3},
    {_id: 12, name: 'Cam', quantity: 3},
  ],
  editingBill: [
    {_id: 1, name: 'Hành', quantity: 2},
    {_id: 2, name: 'Tỏi', quantity: 3},
    {_id: 3, name: 'Dưa chuột', quantity: 0},
    {_id: 4, name: 'Cà rốt', quantity: 1},
    {_id: 5, name: 'Cà tím', quantity: 1},
    {_id: 6, name: 'Bí', quantity: 5},
    {_id: 7, name: 'Khoai tây', quantity: 1},
    {_id: 8, name: 'Mùi', quantity: 1},
    {_id: 9, name: 'ớt', quantity: 3},
    {_id: 10, name: 'Ngô', quantity: 3},
    {_id: 11, name: 'Thì là', quantity: 3},
    {_id: 12, name: 'Cam', quantity: 3},
  ]
};

const bill = (state = initState.bill, action) => {
  switch (action.type) {
    case 'SAVE_BILL':
      return action.bill;
    default:
      return state
  }
};

const editingBill = (state = initState.editingBill, action) => {
  switch (action.type) {
    case 'BILL_ITEM_CHANGED':
      return state;
    case 'SAVE_BILL':
      return action.bill;
    default:
      return state
  }
};

export const getBillByCustomer = (state, customerId) => state.bill || initState.bill;
export const getEditingBillByCustomer = (state, customerId) => state.editingBill || initState.editingBill;


const dailyBillReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        bill: bill(state.bill, action),
        editingBill: editingBill(state.editingBill, action),
      }
  }
};

export default dailyBillReducer