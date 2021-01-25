const { count } = require("console");

function main(input) {
  const [a, b, c, x] = input.trim().split("\n").map(Number);

  let cnt = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (x === i * 500 + j * 100 + k * 50) {
          cnt += 1;
        }
      }
    }
  }
  console.log(cnt);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
