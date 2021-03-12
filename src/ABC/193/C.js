function main(input) {
  const N = +input.trim();

  const ans = new Set();
  for (let i = 2; i <= Math.sqrt(N); i++) {
    let j = 2;
    let ret = 0;
    while (i ** j <= N) {
      ret = i ** j;
      ans.add(ret);
      j += 1;
    }
  }
  console.log(N - ans.size);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
