function main(input) {
  const [X, K, D] = input.trim().split(" ").map(Number);
  const absX = Math.abs(X);

  const div = absX / D;
  const firstCnt = Math.round(div);
  let secondCnt;
  if (div === firstCnt) {
    secondCnt = div + 1;
  } else {
    secondCnt = div - firstCnt >= 0 ? Math.ceil(div) : Math.floor(div);
  }

  let ans = 0;
  if (K - firstCnt < 0) {
    ans = absX - K * D;
  } else if ((K - firstCnt) % 2 === 0) {
    ans = absX - D * firstCnt;
  } else {
    ans = absX - D * secondCnt;
  }
  console.log(Math.abs(ans));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
