function createPtn(num) {
  const pattern = [];
  for (let i = 0; i < 1 << num; i++) {
    const s = [];
    for (let j = 0; j < num; j++) {
      const condition = ((i >> j) & 1) === 1;
      s.push(condition);
    }
    pattern.push(s);
  }
  return pattern;
}

function main(input) {
  input = input.trim().split("\n");
  const [H, W, K] = input.shift().split(" ").map(Number);
  const C = input.map((v) => v.split(""));

  const hPtn = createPtn(H);
  const wPtn = createPtn(W);

  let sum = 0;
  hPtn.forEach((hR) => {
    wPtn.forEach((wR) => {
      let blackCnt = 0;
      C.forEach((rv, ri) => {
        if (hR[ri]) {
          rv.forEach((cv, ci) => {
            if (wR[ci]) {
              if (cv === "#") {
                blackCnt += 1;
              }
            }
          });
        }
      });
      if (blackCnt === K) sum += 1;
    });
  });
  console.log(sum);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
