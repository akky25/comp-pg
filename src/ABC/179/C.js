function main(input) {
  const N = +input.trim();

  let cnt = 0;
  for (let i = 1; i < N; i++) {
    for (let j = 1; j * j <= N - i; j++) {
      const cn = N - i;
      if (cn % j === 0) {
        cnt += cn / j === j ? 1 : 2;
      }
    }
  }
  console.log(cnt);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
