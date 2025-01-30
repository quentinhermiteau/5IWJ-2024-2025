"use client";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div id="notice">
        Utilise le hook useState pour faire fonctionner ce compteur
      </div>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
}
