function main(input) {
  const [N, X, T] = input.trim().split(" ").map(Number);
  const ans = Math.ceil(N / X) * T;
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
