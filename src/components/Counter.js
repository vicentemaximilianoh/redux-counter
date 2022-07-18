import { useSelector } from 'react-redux';
import { counterActions } from '../store/counter-reducer';
import store from '../store/store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state => state.counter));

  const toggleCounterHandler = () => { store.dispatch(counterActions.toggle()) };
  const incrementHandler = () => { store.dispatch(counterActions.increment()); };
  const decrementHandler = () => { store.dispatch(counterActions.decrement()); };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.visible && <div className={classes.value}>{counter.counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
