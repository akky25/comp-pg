function main(input) {
  const [a, b, c, d] = input
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number))
    .flat();

  console.log(a * d - b * c);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
