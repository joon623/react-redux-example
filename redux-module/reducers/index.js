const { combineReducers } = require('redux');
const postReducer = require('./post');
const userReducer = require('./user');

module.exports = combineReducers({
  posts: postReducer,
  user: userReducer,
});
