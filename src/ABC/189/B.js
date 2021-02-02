function main(input) {
  input = input.trim().split("\n");
  input = input.map((v) => v.split(" ").map(Number));
  const [N, S, D] = input.shift();

  let flg = false;
  input.forEach((element) => {
    if (element[0] < S && element[1] > D) {
      flg = true;
    }
  });
  console.log(flg ? "Yes" : "No");
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
