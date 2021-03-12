function main(input) {
  const [X, Y, R] = input.trim().split(" ").map(Number);

  const maxX = Math.floor(X + R);
  const minX = Math.ceil(X - R);

  let cnt = 0;
  for (let i = minX; i <= maxX; i++) {
    const maxY = Math.sqrt(R ** 2 - (i - X) ** 2) + Y;
    const minY = -Math.sqrt(R ** 2 - (i - X) ** 2) + Y;
    const intY = Math.floor(maxY) - Math.ceil(minY);

    if (intY >= 0) cnt += intY + 1;
  }

  console.log(cnt);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
