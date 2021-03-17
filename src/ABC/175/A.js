function main(input) {
  const S = input.trim();
  let max = 0;
  let cnt = 0;
  S.split("").forEach((s) => {
    cnt = s === "R" ? cnt + 1 : 0;
    max = Math.max(max, cnt);
  });
  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
