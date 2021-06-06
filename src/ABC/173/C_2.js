function main(input) {
  input = input.trim().split("\n");
  const [H, W, K] = input.shift().split(" ").map(Number);
  const C = input.map((v) => v.split(""));

  let sum = 0;
  for (let iH = 0; iH < 1 << H; iH++) {
    for (let iW = 0; iW < 1 << W; iW++) {
      let black = 0;
      C.forEach((vr, ir) => {
        vr.forEach((vc, ic) => {
          const rr = ((iH >> ir) & 1) === 1;
          const rc = ((iW >> ic) & 1) === 1;
          if (!rr && !rc && vc === "#") {
            black += 1;
          }
        });
      });
      if (black === K) sum += 1;
    }
  }

  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
