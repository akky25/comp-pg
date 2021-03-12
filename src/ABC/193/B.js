function main(input) {
  input = input.trim().split("\n");
  const N = +input.shift();
  const t = input.map((v) => v.split(" ").map(Number));

  let num = -1;

  t.forEach((elm) => {
    const [A, P, X] = elm;
    if (X - A > 0) {
      if (num === -1 || P < num) {
        num = P;
      }
    }
  });

  console.log(num);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
