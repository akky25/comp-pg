function main(input) {
  input = input.trim().split("\n");
  const N = +input.shift();
  const A = input[0].split(" ").map(Number);

  const dai = [0];

  for (let i = 1; i < N; i++) {
    const preH = A[i - 1] + dai[i - 1];
    const diff = preH - A[i];
    const d = A[i] >= preH ? 0 : diff;
    dai.push(d);
  }
  const sum = dai.reduce((a, b) => a + b);
  console.log(sum);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
