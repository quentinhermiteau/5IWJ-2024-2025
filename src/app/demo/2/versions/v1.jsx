"use client";

import { useState } from "react";
import formatTime from "./utils";

// Problème avec id reset à chaque render
export default function StopwatchV1() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  let id = null;

  const handleClick = () => {
    if (running === false) {
      id = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setRunning(true);
    } else {
      window.clearInterval(id);
      id = null;
      setRunning(false);
    }
  };
  console.log("render v1");

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
