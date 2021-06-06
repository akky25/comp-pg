function main(input) {
  input = input.trim().split("\n");
  const N = input.shift();
  const ST = input.map((v) => v.split(" "));

  ST.sort((a, b) => +b[1] - +a[1]);
  console.log(ST[1][0]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
