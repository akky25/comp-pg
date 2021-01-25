function main(input) {
  const inputArr = input.trim().split("\n");
  inputArr.shift();
  const unique = new Set(inputArr);

  let res = "satisfiable";
  unique.forEach((ele) => {
    const tg = ele.startsWith("!") ? ele.slice(1) : `!${ele}`;
    if (unique.has(tg)) {
      res = ele.startsWith("!") ? ele.slice(1) : ele;
    }
  });

  console.log(res);
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/16_satisfiable1.txt", "utf8"));
