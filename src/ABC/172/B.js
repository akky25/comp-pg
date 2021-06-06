function main(input) {
  const [S, T] = input.trim().split("\n");

  let cnt = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) cnt += 1;
  }
  console.log(cnt);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
