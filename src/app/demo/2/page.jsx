"use client";

import StopwatchV1 from "./versions/v1";
import StopwatchV2 from "./versions/v2";
import StopwatchV3 from "./versions/v3";

export default function Page() {
  return (
    <main>
      <StopwatchV1 />
      <StopwatchV2 />
      <StopwatchV3 />
    </main>
  );
}
