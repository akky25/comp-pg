function main(input) {
  const [a, b, c, d] = input.trim().split(" ").map(BigInt);
  let max = a * c;
  max = a * d > max ? a * d : max;
  max = b * c > max ? b * c : max;
  max = b * d > max ? b * d : max;
  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
