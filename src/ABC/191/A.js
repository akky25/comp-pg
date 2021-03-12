function main(input) {
  const [V, T, S, D] = input.trim().split(" ").map(Number);
  const s = V * T;
  const e = V * S;
  console.log(D < s || D > e ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
