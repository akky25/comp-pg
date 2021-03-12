function main(input) {
  const [X, Y, R] = input
    .trim()
    .split(" ")
    .map((v) => Math.floor(+v * 10 ** 4));

  const maxX = Math.floor((X + R) / 10 ** 4);
  const minX = Math.ceil((X - R) / 10 ** 4);

  const [X2, Y2, R2] = input.trim().split(" ").map(Number);

  let cnt = 0;
  for (let i = minX; i <= maxX; i++) {
    const I = i * 10 ** 4;
    const maxY = Math.floor(Math.sqrt(R ** 2 - (I - X) ** 2) + Y);
    const minY = Math.ceil(-Math.sqrt(R ** 2 - (I - X) ** 2) + Y);
    const intY = Math.floor(maxY / 10 ** 4) - Math.ceil(minY / 10 ** 4);

    if (intY >= 0) cnt += intY + 1;

    const maxY2 = Math.sqrt(R2 ** 2 - (i - X2) ** 2) + Y2;
    const minY2 = -Math.sqrt(R2 ** 2 - (i - X2) ** 2) + Y2;
    const intY2 = Math.floor(maxY2) - Math.ceil(minY2);

    if (intY !== intY2) {
      console.log("NG");
    }
  }

  console.log(cnt);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
