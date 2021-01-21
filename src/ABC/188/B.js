const { networkInterfaces } = require("os");

function main(input) {
  input = input.trim().split("\n");

  const n = +input[0];
  const a = input[1].split(" ").map((v) => +v);
  const b = input[2].split(" ").map((v) => +v);

  let ip = 0;
  for (i = 0; i < n; i++) {
    ip += a[i] * b[i];
  }
  console.log(ip === 0 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
