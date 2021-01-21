function main(input) {
  input = input
    .trim()
    .split(" ")
    .map((v) => +v);
  const diff = Math.abs(input[0] - input[1]);
  console.log(diff < 3 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
