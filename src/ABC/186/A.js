function main(input) {
  input = input.trim().split(" ").map(Number);
  console.log(Math.floor(input[0] / input[1]));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
