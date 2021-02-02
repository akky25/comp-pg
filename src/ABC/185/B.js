function main(input) {
  input = input
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const [N, M, T] = input.shift();

  const m = N;
  let n = N;
  let t = 0;
  let flg = true;
  input.forEach((elm) => {
    const [t1, t2] = elm;
    n -= t1 - t;
    if (n < 1) flg = false;
    const add = n + (t2 - t1);
    n = add > m ? m : add;
    t = t2;
  });
  n -= T - t;
  if (n < 1) flg = false;

  console.log(flg ? "Yes" : "No");
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
