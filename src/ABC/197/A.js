function main(input) {
  const S = input.trim();
  let ans = "";
  ans = `${ans}${S[1]}`;
  ans = `${ans}${S[2]}`;
  ans = `${ans}${S[0]}`;
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
