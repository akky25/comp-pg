function main(input) {
  let X = input.trim();

  const point = X.indexOf(".");

  if (point >= 0) {
    X = X.slice(0, point);
  }
  console.log(X);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
