"use client";

import { useReducer } from "react";

const initialState = {
  past: [],
  count: 0,
  future: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        past: [...state.past, state.count],
        count: state.count + 1,
        future: [],
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "UNDO":
      return {
        past: state.past.slice(0, -1),
        count: state.past[state.past.length - 1],
        future: [...state.future, state.count],
      };
    case "REDO":
      return {
        past: [...state.past, state.count],
        count: state.future[state.future.length - 1],
        future: state.future.slice(0, -1),
      };
    default:
      return state;
  }
}

export default function CounterWithUndoRedo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });
  const handleUndo = () => dispatch({ type: "UNDO" });
  const handleRedo = () => dispatch({ type: "REDO" });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
