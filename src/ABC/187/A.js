function cal(input) {
  let tgt = input;
  let sum = 0;
  while (tgt !== 0) {
    sum += tgt % 10;
    tgt = Math.floor(tgt / 10);
  }
  return sum;
}

function main(i) {
  const input = i.trim().split(" ");
  const a = cal(+input[0]);
  const b = cal(+input[1]);

  console.log(a >= b ? a : b);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
