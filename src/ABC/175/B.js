function main(input) {
  input = input.trim().split("\n");
  const N = +input[0];
  const L = input[1].split(" ").map(Number);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const max = Math.max(L[i], L[j], L[k]);
        const isTriangle = L[i] + L[j] + L[k] - max > max;
        if (L[i] !== L[j] && L[i] !== L[k] && L[j] !== L[k] && isTriangle) {
          sum += 1;
        }
      }
    }
  }
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
