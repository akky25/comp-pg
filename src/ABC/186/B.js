function main(input) {
  input = input.trim().split("\n");
  input = input.map((v) => v.split(" ").map(Number));
  const [H, M] = input.shift();
  input = input.flat();

  input.sort((a, b) => a - b);
  const min = input[0];
  const sum = input.reduce((a, b) => a + b);

  console.log(sum - min * H * M);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
