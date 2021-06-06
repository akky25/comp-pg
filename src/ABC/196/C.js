function main(input) {
  const N = input.trim();

  const half = Math.floor(N.length / 2);
  const left = Math.floor(+N / 10 ** half);
  const right = +N % 10 ** half;

  if (left >= 10 ** half) {
    console.log(10 ** half - 1);
  } else {
    const ans = left <= right ? left : left - 1;
    console.log(ans);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
