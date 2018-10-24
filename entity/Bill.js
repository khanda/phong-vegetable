const Bill = function (customerId, goods, date) {
  return {
    customerId: customerId,
    goods: goods,
    date: date,
  }
};

export default Bill;