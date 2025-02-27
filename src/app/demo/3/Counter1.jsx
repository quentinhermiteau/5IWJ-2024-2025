"use client";

import { useReducer } from "react";

function reducer(state, value) {
  return state + value;
}

const initialState = 0;

export default function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch(1);
  const handleDecrement = () => dispatch(-1);

  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </main>
  );
}
