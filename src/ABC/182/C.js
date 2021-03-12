function main(input) {
  const N = input.trim().split("");

  let len = N.length;
  for (let i = 0; i < (1 << N.length) - 1; i++) {
    // console.log(i.toString(2));
    let str = "";
    for (let j = 0; j < N.length; j++) {
      if (!((i >> j) & 1)) {
        str += N[j];
      }
    }

    const strLen = N.length - str.length;
    const bint = BigInt(str);
    if (bint % 3n === 0n && strLen < len) {
      len = strLen;
    }
  }

  console.log(len < N.length ? len : "-1");
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
