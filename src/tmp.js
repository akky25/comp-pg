function main(input) {
  input = input.trim().split("\n");
  const [N, X, Y] = input.shift().split(" ");
  const A = [...input];
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
