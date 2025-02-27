"use client";

import { useState } from "react";
import Slider from "./Slider";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);
  const handleReset = () => setCount(0);
  const handleUpdateStep = (step) => setStep(step);

  return (
    <main>
      <div id="notice">
        À l'aide de useEffect et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider min={1} max={10} onChange={handleUpdateStep} />
    </main>
  );
}
