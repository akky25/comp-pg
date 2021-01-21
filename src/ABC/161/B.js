const main = (input) => {
  const [input1, input2] = input.trim().split("\n");
  const [itemNum, targetNum] = input1.split(" ").map((v) => +v);
  const arr = input2.split(" ").map((v) => +v);
  const sum = arr.reduce((sum, elm) => sum + elm, 0);
  const result = arr.filter((v) => v >= sum / (4 * targetNum)).length;
  console.log(result >= targetNum ? "Yes" : "No");

  // arr.sort((a, b) => b - a);
  // for (let i = 0; i < m; i++) {
  //   if (arr[i] < sum / (4 * targetNum)) {
  //       return console.log("No")
  //   }
  // }
  // return console.log("Yes");
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
