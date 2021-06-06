function main(input) {
  const X = input.trim();

  let ans = "";
  for (let i = 0; i < X.length; i++) {
    if (X[i] === ".") break;
    ans += X[i];
  }
  console.log(ans);
  // const point = X.indexOf(".");

  // if (point >= 0) {
  //   X = X.slice(0, point);
  // }
  // console.log(X);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
