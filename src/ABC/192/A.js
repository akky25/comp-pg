function main(input) {
  const N = +input.trim().split("\n");
  const ret = 100 - (N % 100);
  console.log(ret);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
