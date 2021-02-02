function main(input) {
  const [N, M] = input.trim().split(" ").map(Number);
  const ans = Math.floor(10 ** N / M) % M;
  console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
