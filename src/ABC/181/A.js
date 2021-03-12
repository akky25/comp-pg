function main(input) {
  const N = +input.trim();
  console.log(N % 2 === 0 ? "White" : "Black");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
