import RNDBModel from 'react-native-db-models';

var DB = {
  "app": new RNDBModel.create_db('app'),
  "users": new RNDBModel.create_db('users'),
  "todos": new RNDBModel.create_db('todos'),
};

export default DB;