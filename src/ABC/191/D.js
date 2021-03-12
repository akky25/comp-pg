function main(input) {
  const [X, Y, R] = input
    .trim()
    .split(" ")
    .map((v) => Math.floor(+v * 10 ** 4));

  const maxX = Math.floor((X + R) / 10 ** 4);
  const minX = Math.ceil((X - R) / 10 ** 4);

  let cnt = 0;
  for (let i = minX; i <= maxX; i++) {
    const I = i * 10 ** 4;
    const maxY = Math.floor(Math.sqrt(R ** 2 - (I - X) ** 2) + Y);
    const minY = Math.ceil(-Math.sqrt(R ** 2 - (I - X) ** 2) + Y);
    const intY = Math.floor(maxY / 10 ** 4) - Math.ceil(minY / 10 ** 4);

    if (intY >= 0) cnt += intY + 1;
  }

  console.log(cnt);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
