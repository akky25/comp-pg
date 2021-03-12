function main(input) {
  const S = input.trim().split("");

  // const searchPattern1 = /[a-z]/;
  const searchPattern1 = /[a-z]/;
  const searchPattern2 = /[A-Z]/;
  let ret = "Yes";

  for (let i = 0; i < S.length; i++) {
    const str = S[i];
    const ret1 = str.match(searchPattern1);
    const ret2 = str.match(searchPattern2);
    if (i % 2 === 0 && ret1 === null) {
      ret = "No";
      break;
    } else if (i % 2 !== 0 && ret2 === null) {
      ret = "No";
      break;
    }
  }
  console.log(ret);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
