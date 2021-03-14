function main(input) {
  input = input.trim().split("\n");
  const [N, M, Q] = input.shift().split(" ").map(Number);

  const WV = [];
  for (let i = 0; i < N; i++) {
    const value = input.shift().split(" ").map(Number);
    WV.push(value);
  }
  const sortWV = WV.sort((a, b) => b[1] - a[1]);

  const X = input.shift().split(" ").map(Number);

  const Query = input.map((v) => v.split(" ").map(Number));

  Query.forEach((elm) => {
    const [L, R] = elm;
    const newX = X.concat();
    newX.splice(L - 1, R - L + 1);
    const sortX = newX.sort((a, b) => a - b);

    let sum = 0;
    const tmpWV = sortWV.concat();
    sortX.forEach((x) => {
      for (let i = 0; i < tmpWV.length; i++) {
        const [W, V] = tmpWV[i];
        if (W <= x) {
          sum += V;
          tmpWV.splice(i, 1);
          break;
        }
      }
    });
    console.log(sum);
  });
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
