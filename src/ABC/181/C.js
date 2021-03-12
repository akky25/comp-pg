function main(input) {
  input = input.trim().split("\n");
  const N = input.shift();
  const arr = input.map((v) => v.split(" ").map(Number));

  let flg = false;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const X12 = arr[j][0] - arr[i][0];
        const Y12 = arr[j][1] - arr[i][1];
        const X13 = arr[k][0] - arr[i][0];
        const Y13 = arr[k][1] - arr[i][1];
        if (X12 * Y13 === Y12 * X13) {
          flg = true;
        }
      }
    }
  }

  console.log(flg ? "Yes" : "No");
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
