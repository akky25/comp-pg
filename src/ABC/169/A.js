function main(input) {
  const [A, B] = input.trim().split(" ").map(Number);
  console.log(A * B);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
