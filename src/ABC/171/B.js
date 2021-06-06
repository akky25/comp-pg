function main(input) {
  input = input.trim().split("\n");
  const [N, K] = input[0].split(" ").map(Number);
  const p = input[1].split(" ").map(Number);

  const min = p
    .sort((a, b) => a - b)
    .slice(0, K)
    .reduce((a, b) => a + b);

  console.log(min);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
