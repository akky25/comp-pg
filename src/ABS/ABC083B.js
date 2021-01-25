function main(input) {
  const [N, A, B] = input.trim().split(" ");

  let sum = 0;
  for (let i = 1; i <= N; i++) {
    const eachDigit =
      Math.floor(i / 10000) +
      Math.floor((i % 10000) / 1000) +
      Math.floor((i % 1000) / 100) +
      Math.floor((i % 100) / 10) +
      (i % 10);

    // const eachDigit = i
    //   .toString()
    //   .split("")
    //   .map(Number)
    //   .reduce((x, y) => x + y);

    if (eachDigit >= A && eachDigit <= B) {
      sum += i;
    }
  }
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
