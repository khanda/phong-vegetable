var initialState = {
  loading: false,
  error: null,
  bill: [],
  editingBill: []
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
    default:
      return state;
  }
}

export const getBillByCustomer = (state, customerId) => state.bill || initialState.bill;
export const getEditingBillByCustomer = (state, customerId) => state.editingBill || initialState.editingBill;