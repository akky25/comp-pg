function main(input) {
  input = input.trim().split("\n");
  const [N, K] = input.shift().split(" ").map(Number);
  const arrT = input.map((v) => v.split(" ").map(Number));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
