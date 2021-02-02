function main(input) {
  input = input.trim().split("\n");
  const [N, M] = input[0].split(" ").map(Number);
  const AB = input.slice(1, M + 1).map((v) => v.split(" ").map(Number));
  const K = +input[M + 1];
  const CD = input.slice(M + 2).map((v) => v.split(" ").map(Number));

  let cnt = 0;
  for (let i = 0; i < 2 ** K; i++) {
    const nums = new Set();
    for (let j = 0; j < K; j++) {
      const k = Math.floor(i / 2 ** j) % 2;
      const num = CD[j][k];
      nums.add(num);
    }

    let sum = 0;
    AB.forEach((ab) => {
      if (nums.has(ab[0]) && nums.has(ab[1])) {
        sum += 1;
      }
    });

    cnt = sum > cnt ? sum : cnt;
  }

  console.log(cnt);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
