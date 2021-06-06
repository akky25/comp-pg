function main(input) {
  const [A, B, H, M] = input.trim().split(" ").map(Number);

  const diff = (H + M / 60) / 12 - M / 60;
  const angle = diff * 2 * Math.PI;
  const result = Math.sqrt(A ** 2 + B ** 2 - 2 * A * B * Math.cos(angle));

  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
