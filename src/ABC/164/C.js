function main(input) {
  input = input.trim().split("\n");
  const N = input.shift();
  const S = [...input];

  const setS = new Set(S);
  console.log(setS.size);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
