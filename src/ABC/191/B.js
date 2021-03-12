function main(input) {
  input = input.trim().split("\n");
  const [N, X] = input.shift().split(" ").map(Number);
  const arrA = input[0].split(" ").map(Number);

  const res = arrA.filter((e) => e !== X);
  let str = "";
  res.forEach((element) => {
    str = `${str} ${element}`;
  });
  console.log(str.trim());
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
