function main(input) {
  input = input.trim().split("\n");
  const N = Number(input.shift());
  const coordinates = input.map((v) => v.split(" ").map(Number));

  let bt = 0;
  let bx = 0;
  let by = 0;
  let flg = false;
  coordinates.forEach((item) => {
    flg = false;
    const [t, x, y] = item;
    const dd = t - bt - (Math.abs(x - bx) + Math.abs(y - by));
    if (dd >= 0 && dd % 2 === 0) {
      flg = true;
    }
    bt = t;
    bx = x;
    by = y;
  });
  console.log(flg ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
