import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { decrease, increase, increaseBy } from '../store/counter';
import Counter from './Counter';

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
