"use client";

import { useEffect, useReducer } from "react";
import Slider from "./Slider";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "RESET":
      return initialState;
    case "UPDATE_STEP":
      return { ...state, step: action.step };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });
  const handleReset = () => dispatch({ type: "RESET" });
  const handleUpdateStep = (step) => dispatch({ type: "UPDATE_STEP", step });

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "INCREMENT" });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div id="notice">
        À l'aide de useEffect et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{state.count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider min={1} max={10} value={state.step} onChange={handleUpdateStep} />
    </main>
  );
}
