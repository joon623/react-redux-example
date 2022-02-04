const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers/index');
const { handleLogOut, handleLogin, login } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

// middleware의 역할은?
// redux에서 삼단함수가 middleware이다.
const firstMiddleware = (store) => (next) => (action) => {
  // 기능 추가 dispatch action 전 기능  추가
  // console.log('액션 로깅', action);
  next(action);
  // 기능 추가 dispatch action 후 기능  추가
  // console.log('액션 끝', action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    // thunk는 객체 -> 동기 함수 -> 비동기
    console.log(store);
    console.log(next);
    console.log(action);
    return action(store.next, store.getState);
  }
  console.log(action);
  return dispatch(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

// store.dispatch(handleLogin('giid'));
store.dispatch(login('giid'));
