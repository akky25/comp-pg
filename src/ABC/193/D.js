function point(str) {
  const pArr = new Array(9).fill(0);
  str.split("").forEach((element) => {
    pArr[+element - 1] += 1;
  });
  let p = 0;
  pArr.forEach((element, index) => {
    p += (index + 1) * 10 ** element;
  });
  return p;
}

function main(input) {
  input = input.trim().split("\n");
  const K = +input[0];
  const S = input[1].slice(0, 4);
  const T = input[2].slice(0, 4);

  const cards = new Array(10).fill(K);
  S.split("").forEach((element) => {
    cards[+element] -= 1;
  });
  T.split("").forEach((element) => {
    cards[+element] -= 1;
  });

  let cnt = 0;
  for (let i = 1; i < 10; i++) {
    const SP = point(S + i.toString());
    for (let j = 1; j < 10; j++) {
      const TP = point(T + j.toString());

      if (SP > TP) {
        if (i !== j) {
          cnt += cards[i] * cards[j];
        } else {
          const tmp = cards[j] - 1;
          cnt += cards[i] * (tmp > 0 ? tmp : 0);
        }
      }
    }
  }
  const ans = cnt / (9 * K - 8) / (9 * K - 9);
  console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
