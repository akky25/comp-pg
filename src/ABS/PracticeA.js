function main(i) {
  const input = i.trim().split("\n");
  const line2 = input[1].split(" ");
  const a = parseInt(input[0], 10);
  const b = parseInt(line2[0], 10);
  const c = parseInt(line2[1], 10);

  console.log(a + b + c, input[2]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
