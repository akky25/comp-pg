function main(input) {
  const N = input.trim();

  let sum = 0;
  for (let i = 0; true; i++) {
    if (N < 10 ** (3 * (i + 1))) {
      sum += (N - (10 ** (3 * i) - 1)) * i;
      break;
    } else {
      sum += 999 * 10 ** (3 * i) * i;
    }
  }
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
