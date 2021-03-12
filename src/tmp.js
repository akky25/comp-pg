function main(input) {
  input = input.trim().split("\n");
  const n = BigInt(input[0]);

  let a = 10;
  let b = 9;
  let c = 8;
  const mod = 1e9 + 7;
  for (let i = 1; i < n; i++) {
    a = (a * 10) % mod;
    b = (b * 9) % mod;
    c = (c * 8) % mod;
  }
  const ans = (a - 2 * b + c) % mod;
  console.log((ans + mod) % mod);
  const ans2 = mod + ((a - 2 * b + c) % mod);
  console.log(ans2);
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
