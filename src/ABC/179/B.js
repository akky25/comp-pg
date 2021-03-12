function main(input) {
  input = input.trim().split("\n");
  const N = +input.shift();
  const D = input.map((v) => v.split(" ").map(Number));

  for (let i = 0; i < D.length - 2; i++) {
    if (
      D[i][0] === D[i][1] &&
      D[i + 1][0] === D[i + 1][1] &&
      D[i + 2][0] === D[i + 2][1]
    ) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
