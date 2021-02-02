function main(input) {
  console.log(Math.min(...input.trim().split(" ").map(Number)));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
