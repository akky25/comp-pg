function main(input) {
  const [r1, c1, r2, c2] = input
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number))
    .flat();

  const con1 = r1 + c1 - r2 - c2;
  const con2 = r1 - c1 - r2 + c2;
  const con3 = Math.abs(r1 - r2) + Math.abs(c1 - c2);
  let ans = 0;
  if (con3 === 0) ans = 0;
  else if (con3 <= 3 || con1 === 0 || con2 === 0) ans = 1;
  else if (
    con3 % 2 === 0 ||
    Math.abs(con1) <= 3 ||
    Math.abs(con2) <= 3 ||
    con3 <= 6
  )
    ans = 2;
  else if (con3 % 2 !== 0) ans = 3;

  console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
