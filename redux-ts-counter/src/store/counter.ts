// 액션 타입 선언
// as const를 붙여줌으로써 action.type를 추론하는 과정에서 string으로 추론되지 않고 고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해준다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// 모든 액션 겍체들에 대한 타입을 준비
// ReturnType<typeof ___>는 특정 함수의 반환값을 추론해준다.
// 상단부에서 액션타입을 선언할 때 as const를 하지 않으면 제대로 작동하지 않을 수 있다.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 상태의 타입 선언
type CounterState = {
  count: number;
};

// 초기 상태 선언
const initialState: CounterState = {
  count: 0,
};

function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
