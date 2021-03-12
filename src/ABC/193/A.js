function main(input) {
  const [A, B] = input.trim().split(" ").map(Number);
  const ans = 100 - (B / A) * 100;
  console.log(Number.parseFloat(ans).toFixed(3));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
