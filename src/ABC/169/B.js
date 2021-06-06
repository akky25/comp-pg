function main(input) {
  input = input.trim().split("\n");
  const N = +input[0];
  const A = input[1].split(" ").map(BigInt);

  const hasZero = A.findIndex((v) => v === 0n);
  if (hasZero !== -1) {
    console.log(0);
    return;
  }

  let result = 1n;
  for (let i = 0; i < N; i++) {
    result *= A[i];
    if (result > 10n ** 18n) {
      console.log(-1);
      return;
    }
  }
  console.log(result.toString());
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
