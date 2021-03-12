function main(input) {
  const [D, T, S] = input.trim().split(" ").map(Number);

  console.log(D / S <= T ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
