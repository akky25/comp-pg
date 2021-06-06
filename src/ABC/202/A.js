function main(input) {
  const [a, b, c] = input.trim().split(" ");
  console.log(21 - a - b - c);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
