function main(input) {
  input = input.trim().split("\n");
  const [H, W] = input.shift().split(" ").map(Number);
  const arrS = input.map((v) => v.split(""));

  let cnt = 0;
  for (let i = 0; i < H - 1; i++) {
    for (let j = 0; j < W - 1; j++) {
      let inCnt = 0;

      if (arrS[i][j] === "#") inCnt += 1;
      if (arrS[i + 1][j] === "#") inCnt += 1;
      if (arrS[i][j + 1] === "#") inCnt += 1;
      if (arrS[i + 1][j + 1] === "#") inCnt += 1;

      if (inCnt === 1 || inCnt === 3) cnt += 1;
    }
  }

  console.log(cnt);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
