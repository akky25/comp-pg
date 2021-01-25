// function main(i) {
//   const input = i.trim().split("\n");
//   input.shift();
//   const mochi = new Set(input.map(Number));
//   console.log(mochi.size);
// }

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// const input = i.trim().split("\n");
input.shift();
const mochi = new Set(input.map(Number));
console.log(mochi.size);
