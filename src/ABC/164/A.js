function main(input) {
  const [A, B, C, D] = input.trim().split(" ").map(Number);

  const takahashi = Math.floor(C / B);
  const aoki = Math.floor(A / D);

  console.log(takahashi >= aoki ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
