function main(input) {
  const N = +input.trim();

  let ans = "";
  let tmp = N;

  while (tmp !== 0) {
    tmp -= 1;
    const mod = tmp % 26;
    tmp = Math.floor(tmp / 26);

    ans = `${String.fromCodePoint(mod + 97)}${ans}`;
  }

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
