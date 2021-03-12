function main(input) {
  input = input.trim().split("\n");
  const N = +input[0];
  const A = input[1].split(" ").map(BigInt);

  const mod = BigInt(10 ** 9 + 7);

  const modS = [0n];

  for (let i = 0; i < N; i++) {
    modS.push(modS[i] + A[i]);
  }

  let sum = 0n;
  for (let i = 0; i < N - 1; i++) {
    const modAi = A[i] % mod;
    sum += modAi * ((modS[N] - modS[i + 1]) % mod);
  }
  console.log((sum % mod).toString());
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
