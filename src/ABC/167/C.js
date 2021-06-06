function main(input) {
  input = input.trim().split("\n");
  const [N, M, X] = input.shift().split(" ").map(Number);
  const CA = input.map((v) => v.split(" ").map(Number));

  let result = Infinity;
  for (let i = 0; i < 1 << N; i++) {
    const comprehension = Array(M).fill(0);
    let price = 0;
    for (let j = 0; j < N; j++) {
      if (((i >> j) & 1) === 1) {
        for (let k = 1; k < M + 1; k++) {
          comprehension[k - 1] += CA[j][k];
        }
        price += CA[j][0];
      }
    }
    const isAchievement = comprehension.find((elm) => elm < X);
    if (isAchievement === undefined) {
      result = Math.min(price, result);
    }
  }
  console.log(result === Infinity ? -1 : result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
