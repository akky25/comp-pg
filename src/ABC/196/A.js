function main(input) {
  const [a, b, c, d] = input
    .trim()
    .split("\n")
    .reduce((acc, cur) => acc.concat(cur.split(" ")), []);

  console.log(+b - +c);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
