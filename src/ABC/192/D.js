function main(input) {
  const [X, M] = input.trim().split("\n");

  if (X.length === 1) {
    console.log(+X <= +M ? 1 : 0);
    return;
  }

  const d = Math.max(...X.split(""));

  let ok = BigInt(d);
  let ng = BigInt(M) + 1n;
  while (ng - ok > 1n) {
    const h = (ok + ng) / 2n;

    let ret = 0n;
    for (let i = 0; i < X.length; i++) {
      ret += BigInt(X[i]) * h ** BigInt(X.length - 1 - i);
    }

    if (ret <= BigInt(M)) {
      ok = h;
    } else {
      ng = h;
    }
  }
  console.log((ok - BigInt(d)).toString());
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
