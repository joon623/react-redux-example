const { createStore } = require('redux');

const change_a = 'CHANGE_COMP_A';
const change_b = 'CHANGE_COMP_B';
const change_c = 'CHANGE_COMP_C';

const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case change_a:
      return {
        ...prevState,
        compA: action.data,
      };
    case change_b:
      return {
        ...prevState,
        compB: action.data,
      };
    case change_c:
      return {
        ...prevState,
        compC: action.data,
      };
    // default가 필요한 이유는 오타가 날 수 있기 때문이다. 실무에서 자주 일어나는 현상이다.
    default:
      return prevState;
  }
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  // react-redux 안에 들어있다.
  // 하지만 생각보다 쓸일은 적다.
  console.log('changed');
});

console.log(store.getState());

// action
// action은 추상적으로 만드는게 좋다 .
// 객체가 action이다. 아래는 action 생성 함수
// 함수는 action이 아니다.
// 중복을 없애려고 액션 생성자 함수를 만드는 거지 액션 생성자는 필수가 아니다.
const chageCompA = (data) => {
  return {
    type: change_a,
    data,
  };
};

const chageCompB = (data) => {
  return {
    type: change_b,
    data,
  };
};

const chageCompC = (data) => {
  return {
    type: change_c,
    data,
  };
};

store.dispatch(chageCompA('b'));
store.dispatch(chageCompB('b'));
store.dispatch(chageCompC('c'));
