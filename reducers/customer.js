var initState = {
  customers: [
    {_id: 1, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
    {_id: 2, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {_id: 3, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
    {_id: 4, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
    {_id: 5, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {_id: 6, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
    {_id: 7, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
    {_id: 8, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {_id: 9, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
    {_id: 10, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
    {_id: 11, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {_id: 12, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
  ],
  selectedCustomer: null
};

const customers = (state = initState.customers, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const selectedCustomer = (state = initState.selectedCustomer, action) => {
  switch (action.type) {
    case 'SELECT_CUSTOMER':
      console.log('select ', action._id);
      return action._id;
    default:
      return state
  }
};

export const getCustomers = (state) => state.customers || initState.customers;
export const getSelectedCustomer = (state) => state.selectedCustomer || initState.selectedCustomer;


const customerReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        customers: customers(state.customers, action),
        selectedCustomer: selectedCustomer(state.selectedCustomer, action),
      }
  }
};

export default customerReducer