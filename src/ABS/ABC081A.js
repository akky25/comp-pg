function main(i) {
  const tmp = i
    .trim()
    .split("")
    .filter((n) => n === "1").length;
  console.log(tmp);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
