function main(input) {
  const N = BigInt(input.trim());

  const set = new Set();
  for (let i = 1n; i * i <= N; i++) {
    if (N % i === 0n) {
      set.add(i.toString());
      set.add((N / i).toString());
    }
  }

  Array.from(set.values())
    .sort((a, b) => a - b)
    .forEach((v) => {
      console.log(v);
    });
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
