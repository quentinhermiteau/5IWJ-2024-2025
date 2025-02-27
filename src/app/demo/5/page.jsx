"use client";

import { useState } from "react";

function Logo() {
  console.log("render logo");
  return (
    <div>
      <h1>Logo</h1>
    </div>
  );
}

export default function Page() {
  const [count, setCount] = useState(0);

  console.log("render page");

  return (
    <div>
      <Logo />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
