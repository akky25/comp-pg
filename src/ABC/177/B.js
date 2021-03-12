function main(input) {
  const [S, T] = input.trim().split("\n");

  let min = Infinity;
  for (let i = 0; i <= S.length - T.length; i++) {
    let count = 0;
    for (let j = 0; j < T.length; j++) {
      if (S[i + j] !== T[j]) {
        count += 1;
      }
    }
    if (count < min) min = count;
  }
  console.log(min);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
