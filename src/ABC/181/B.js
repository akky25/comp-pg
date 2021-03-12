function main(input) {
  input = input.trim().split("\n");
  const N = input.shift();
  const arr = input.map((v) => v.split(" ").map(Number));

  let sum = 0;
  arr.forEach((element) => {
    const ret1 = (element[1] * (element[1] + 1)) / 2;
    const ret2 = (element[0] * (element[0] - 1)) / 2;
    sum += ret1 - ret2;
  });
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
