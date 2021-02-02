function main(input) {
  input = input.trim().split("\n");
  const [x1, y1] = input[0].split(" ").map(Number);
  const [x2, y2] = input[1].split(" ").map(Number);

  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);

  console.log(1 + dx + dy);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
