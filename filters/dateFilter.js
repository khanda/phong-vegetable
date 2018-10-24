import Moment from 'moment';

const getDateString = function get(date) {
  if (!date) return null;
  return Moment(date).format('DD/MM/YYYY')
};
export default getDateString;