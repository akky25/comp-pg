function createSum(book, num, K) {
  const sum = [0];
  for (let i = 0; i < num; i++) {
    const nextSumA = sum[i] + book[i];
    if (nextSumA <= K) {
      sum.push(nextSumA);
    } else {
      break;
    }
  }
  return sum;
}

function main(input) {
  input = input.trim().split("\n");
  const [N, M, K] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);

  const sumA = createSum(A, N, K);
  const sumB = createSum(B, M, K);

  let max = 0;
  sumA.forEach((sa, numa) => {
    const rem = K - sa;

    let sb = 0;
    let eb = sumB.length;
    while (eb - sb !== 1) {
      const half = Math.floor((sb + eb) / 2);
      if (sumB[half] <= rem) {
        sb = half;
      } else {
        eb = half;
      }
    }

    const sum = numa + sb;
    if (sum > max) max = sum;
  });

  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
