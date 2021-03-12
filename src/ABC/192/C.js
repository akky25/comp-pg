function fnc(prm) {
  const arr = [];
  let flg = true;
  let trg = prm;
  while (flg) {
    const ret = trg % 10;
    trg = Math.floor(trg / 10);
    if (trg === 0) flg = false;
    arr.push(ret);
  }

  const g1 = arr.sort((a, b) => b - a).join("");
  const g2 = arr.sort((a, b) => a - b).join("");
  const f = g1 - g2;
  return f;
}

function main(input) {
  const [N, K] = input.trim().split(" ");

  let ret = N;
  for (let i = 1; i <= K; i++) {
    ret = fnc(ret);
  }

  console.log(ret);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
