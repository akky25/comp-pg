function main(input) {
  const inputArr = input.trim().split("\n");
  inputArr.shift();
  const unique = new Set(inputArr);
  const y = new Set();
  const n = new Set();

  for (const elm of unique) {
    console.log(elm);
  }

  unique.forEach((element) => {
    if (!element.startsWith("!")) {
      y.add(element);
    } else {
      n.add(element.slice(1));
    }
  });

  let res = "satisfiable";

  y.forEach((elm) => {
    if (n.has(elm)) {
      res = elm;
    }
  });

  console.log(res);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/16_satisfiable1.txt", "utf8"));
