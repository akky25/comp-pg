function main(input) {
  const S = input.trim().split("");

  let count = 0;
  for (let i = 0; i < 10000; i++) {
    const password = `0000${i}`.slice(-4);
    let flg = true;
    S.forEach((judge, num) => {
      const isInclude = password.includes(num.toString());
      if ((judge === "o" && !isInclude) || (judge === "x" && isInclude)) {
        flg = false;
      }
    });
    if (flg) count += 1;
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
