import Moment from 'moment';

const getDateString = function get(date) {
  return Moment(date).format('DD/MM/YYYY')
};
export default getDateString;