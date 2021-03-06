function main(input) {
  input = input.trim().split("\n");
  const [N, K] = input.shift().split(" ").map(Number);

  const s = new Set();
  for (let i = 1; i < input.length; i += 2) {
    const A = input[i].split(" ").map(Number);
    A.forEach((elm) => {
      s.add(elm);
    });
  }
  console.log(N - s.size);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
