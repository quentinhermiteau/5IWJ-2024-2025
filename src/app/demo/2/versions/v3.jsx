"use client";

import { useRef, useState } from "react";
import formatTime from "./utils";

// Utilisation de useRef
export default function StopwatchV3() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const idRef = useRef(null);

  const handleClick = () => {
    if (running === false) {
      idRef.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setRunning(true);
    } else {
      window.clearInterval(idRef.current);
      setRunning(false);
    }
  };

  console.log("render v3");

  return (
    <main>
      <h1>{formatTime(seconds)}</h1>
      <button
        style={{ background: running === true ? "var(--red)" : "var(--green)" }}
        onClick={handleClick}
      >
        {running === true ? "Stop" : "Start"}
      </button>
    </main>
  );
}
