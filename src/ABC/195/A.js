function main(input) {
  const [M, H] = input.trim().split(" ").map(Number);
  const res = H % M === 0 ? "Yes" : "No";
  console.log(res);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
