function main(input) {
  const [A, B, C, D] = input.trim().split(" ").map(Number);

  const takahashi = Math.ceil(C / B);
  const aoki = Math.ceil(A / D);

  console.log(takahashi <= aoki ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
