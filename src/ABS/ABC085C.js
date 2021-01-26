function main(input) {
  const [N, Y] = input.trim().split(" ").map(Number);

  let x = -1;
  let y = -1;
  let z = -1;
  for (let i = N; i >= 0; i--) {
    for (let j = N - i; j >= 0; j--) {
      const k = N - i - j;
      if (Y === 10000 * i + 5000 * j + 1000 * k) {
        x = i;
        y = j;
        z = k;
      }
    }
  }

  console.log(`${x} ${y} ${z}`);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
