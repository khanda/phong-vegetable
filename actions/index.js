let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const getDailyBill = date => ({
  type: 'DAILY_BILL_CHANGED',
  date
});

export const saveDailyBill = bill => ({
  type: 'SAVE_BILL',
  bill
});

export const billItemChanged = billItem => ({
  type: 'BILL_ITEM_CHANGED',
  billItem
});

export const selectCustomer = _id => ({
  type: 'SELECT_CUSTOMER',
  _id
});


export const goToCustomer = _id => ({
  type: 'GO_TO_CUSTOMER',
  _id
});