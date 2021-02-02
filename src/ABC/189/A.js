function main(input) {
  const [A, B, C] = input.trim().split(" ").map(Number);

  let diff = A - B;

  if (C === 0) {
    diff -= 1;
    console.log(diff >= 0 ? "Takahashi" : "Aoki");
  } else {
    diff += 1;
    console.log(diff <= 0 ? "Aoki" : "Takahashi");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
