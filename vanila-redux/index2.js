const { createStore } = require('redux');

const login = 'LOGIN';
const logout = 'LOGOUT';
const add_post = 'ADD_POST';

const initialState = {
  user: false,
  posts: [],
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case login:
      return {
        ...prevState,
        user: action.data,
      };
    case logout:
      return {
        ...prevState,
        user: null,
      };
    case add_post:
      return {
        ...prevState,
        user: true,
        posts: prevState.posts.concat(action.data),
      };
    default:
      return prevState;
  }
};

// ---------------------------------------------------------------
// 액션과 리듀서를 짝이라고 생각하자.

const handleLogin = (data) => {
  return {
    type: login,
    data,
  };
};

const handleLogOut = () => {
  return {
    type: logout,
  };
};

const addPost = (data) => {
  return {
    type: add_post,
    data,
  };
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log('changed');
  console.log(store.getState());
});
store.dispatch(handleLogin('nnamjun94'));
store.dispatch(handleLogOut());
store.dispatch(
  addPost([
    { id: 1, posts: '안녕하세요 저는 박남준입니다.', date: '2020 01 01' },
  ])
);
store.dispatch(
  addPost([
    { id: 1, posts: '안녕하세요 저는 박남준입니다.', date: '2020 01 01' },
  ])
);
