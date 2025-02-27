"use client";

import { useReducer } from "react";

function reducer(state, action) {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return 0;
  } else {
    throw new Error("This action type isn't supported.");
  }
}

const initialState = 0;

export default function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch("increment");
  const handleDecrement = () => dispatch("decrement");
  const handleReset = () => dispatch("reset");

  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
    </main>
  );
}
