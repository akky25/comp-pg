function main(input) {
  input = input.trim().split("\n");
  const N = +input[0];
  const A = input[1].split(" ");

  let min = Infinity;
  for (let i = 0; i < 1 << (N - 1); i++) {
    let or = 0;
    let xor = 0;
    for (let j = 0; j < N; j++) {
      if (j < N) or |= A[j];
      if (j === N - 1 || ((i >> j) & 1) === 1) {
        xor ^= or;
        or = 0;
      }
    }
    min = Math.min(xor, min);
  }

  console.log(min);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
