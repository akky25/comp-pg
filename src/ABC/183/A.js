function main(input) {
  const x = +input.trim();
  console.log(x >= 0 ? x : 0);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
