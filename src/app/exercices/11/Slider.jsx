"use client";

import { useState } from "react";

export default function Slider({ min, max, onChange }) {
  const [value, setValue] = useState(1);

  return (
    <div className="range">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step="1"
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value);
          setValue(value);
        }}
      />
      <div>{value}</div>
    </div>
  );
}
