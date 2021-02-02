function main(input) {
  input = input.trim().split("\n");
  const [N, M] = input.shift().split(" ").map(Number);
  const AB = input.splice(0, M).map((v) => v.split(" ").map(Number));
  const K = +input.shift();
  const CD = input.map((v) => v.split(" ").map(Number));

  let ret = 0;
  for (let i = 0; i < 1 << K; i++) {
    const dish = Array(N + 1).fill(0);

    for (let j = 0; j < K; j++) {
      if ((i >> j) & 1) dish[CD[j][0]] += 1;
      else dish[CD[j][1]] += 1;
    }

    let cnt = 0;
    for (let k = 0; k < M; k++) {
      if (dish[AB[k][0]] > 0 && dish[AB[k][1]] > 0) {
        cnt += 1;
      }
    }

    ret = Math.max(ret, cnt);
  }
  console.log(ret);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
