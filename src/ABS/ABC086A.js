function main(i) {
  const prod = i
    .trim()
    .split(" ")
    .reduce((a, b) => +a * +b);

  console.log(prod % 2 === 0 ? "Even" : "Odd");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
