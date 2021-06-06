function main(input) {
  input = input.trim().split("\n");
  const K = input[0];
  const S = input[1];

  if (S.length <= K) {
    console.log(S);
  } else {
    console.log(`${S.substr(0, K)}...`);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
