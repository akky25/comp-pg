function main(input) {
  input = input.trim().split("\n");
  const N = +input[0];
  const arrA = input[1].split(" ").map(Number);

  let gcd = 0;
  let res = 0;
  for (let i = 2; i <= 1000; i++) {
    let cnt = 0;
    arrA.forEach((element) => {
      if (element % i === 0) cnt += 1;
    });

    if (cnt > gcd) {
      gcd = cnt;
      res = i;
    }
  }
  console.log(res);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
