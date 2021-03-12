function main(input) {
  const [Sx, Sy, Gx, Gy] = input.trim().split(" ").map(Number);
  const x = (Sy * Gx + Gy * Sx) / (Sy + Gy);
  console.log(x);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
