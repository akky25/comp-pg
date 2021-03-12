function main(input) {
  const S = input.trim();
  const last = S.slice(-1);
  console.log(last !== "s" ? `${S}s` : `${S}es`);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
