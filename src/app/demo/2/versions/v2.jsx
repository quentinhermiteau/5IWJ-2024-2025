"use client";

import { useState } from "react";
import formatTime from "./utils";

// Problème avec id, useState utilisé pour gérer un state non utilisé dans le render
export default function StopwatchV2() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [id, setId] = useState(null);

  const handleClick = () => {
    if (running === false) {
      const id = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setId(id);
      setRunning(true);
    } else {
      window.clearInterval(id);
      setId(null);
      setRunning(false);
    }
  };

  console.log("render v2");

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
