function main(input) {
  const a = +input.trim();
  console.log(a + a ** 2 + a ** 3);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
