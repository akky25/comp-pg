function main(input) {
  input = input.trim().split("\n");
  const N = +input[0];
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);
  const C = input[3].split(" ").map(Number);

  const tmpA = Array(N + 1).fill(0);
  const tmpB = Array(N + 1).fill(0);

  A.forEach((a) => {
    tmpA[a] += 1;
  });

  C.forEach((c) => {
    tmpB[B[c - 1]] += 1;
  });

  let count = 0;
  for (let i = 1; i < N + 1; i++) {
    count += tmpA[i] * tmpB[i];
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
