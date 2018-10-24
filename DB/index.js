import RNDBModel from 'react-native-db-models';

var DB = {
  "app": new RNDBModel.create_db('app'),
  "users": new RNDBModel.create_db('users'),
  "todos": new RNDBModel.create_db('todos'),
  "bills": new RNDBModel.create_db('bills'),
};

export default DB;