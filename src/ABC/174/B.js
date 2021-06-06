function main(input) {
  input = input.trim().split("\n");
  const [N, D] = input.shift().split(" ").map(Number);
  const XY = input.map((v) => v.split(" ").map(Number));

  let sum = 0;
  XY.forEach(([x, y]) => {
    const distance = Math.sqrt(x ** 2 + y ** 2);
    if (distance <= D) sum += 1;
  });
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
