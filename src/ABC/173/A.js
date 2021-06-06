function main(input) {
  const N = input.trim();
  const mod = N % 1000;
  console.log(mod === 0 ? 0 : 1000 - mod);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
