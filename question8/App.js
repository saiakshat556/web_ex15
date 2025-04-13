import React, { useState, useReducer } from 'react';

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter (useState)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter (useReducer)</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <h1>Question 8</h1>
      <CounterUseState />
      <CounterUseReducer />
    </div>
  );
};

export default App;

