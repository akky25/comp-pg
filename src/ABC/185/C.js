function main(input) {
  const L = +input.trim();
  const m = 11;
  let p = BigInt(L - 1);
  let c = BigInt(m);
  for (let i = 1; i < m; i++) {
    p *= BigInt(L - 1 - i);
    c *= BigInt(m - i);
  }
  console.log((p / c).toString());
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
