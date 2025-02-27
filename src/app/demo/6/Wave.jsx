"use client";

const toneMap = {
  0: "👋",
  1: "👋🏻",
  2: "👋🏼",
  3: "👋🏽",
  4: "👋🏾",
  5: "👋🏿",
};

function Wave() {
  console.log("Rendering Wave");
  return (
    <span role="img" aria-label="hand waving">
      {toneMap[0]}
    </span>
  );
}

export default Wave;
