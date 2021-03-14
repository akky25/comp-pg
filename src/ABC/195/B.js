function main(input) {
  const [A, B, W] = input.trim().split(" ").map(Number);
  const min = Math.ceil((W * 1000) / B);
  const max = Math.floor((W * 1000) / A);
  const ans = max >= min ? `${min} ${max}` : "UNSATISFIABLE";
  console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
