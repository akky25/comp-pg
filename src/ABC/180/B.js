function main(input) {
  input = input.trim().split("\n");
  const N = input[0];
  const x = input[1].split(" ").map(Number);

  let m = 0;
  let y = 0;
  x.forEach((elm) => {
    m += Math.abs(elm);
    y += elm ** 2;
  });
  y = Math.sqrt(y);
  const c = Math.max(...x.map((v) => Math.abs(v)));

  console.log(m);
  console.log(y);
  console.log(c);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
