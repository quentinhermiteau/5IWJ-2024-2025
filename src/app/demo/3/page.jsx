"use client";

import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Page() {
  return (
    <main>
      <div>
        <h1>Counter 1</h1>
        <Counter1 />
      </div>
      <div>
        <h1>Counter 2</h1>
        <Counter2 />
      </div>
    </main>
  );
}
