function main(input) {
  const K = +input.trim();

  let x = 7 % K;
  const s = new Set();

  for (let i = 1; !s.has(x); i++) {
    if (x === 0) {
      console.log(i);
      return;
    }
    s.add(x);
    x = (10 * x + 7) % K;
  }
  console.log(-1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
