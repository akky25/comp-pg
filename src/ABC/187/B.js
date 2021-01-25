function main(input) {
  const inputArr = input.trim().split("\n");
  const N = parseInt(inputArr.shift(), 10);
  const coordinates = inputArr.map((r) => r.split(" ").map(Number));

  let sum = 0;
  for (let i = 0; i < N; i++) {
    const xi = coordinates[i][0];
    const yi = coordinates[i][1];
    for (let j = i + 1; j < N; j++) {
      const xj = coordinates[j][0];
      const yj = coordinates[j][1];
      const grad = (yj - yi) / (xj - xi);
      if (Math.abs(grad) <= 1) {
        sum += 1;
      }
    }
  }

  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
