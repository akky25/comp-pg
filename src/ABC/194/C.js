function main(input) {
  input = input.trim().split("\n");
  const N = input[0];
  const A = input[1].split(" ").map(Number);

  const countArr = new Array(401).fill(0);
  A.forEach((element) => {
    countArr[element + 200] += 1;
  });

  let sum = 0;
  for (let i = 0; i < countArr.length; i++) {
    for (let j = i; j < countArr.length; j++) {
      const Ai = countArr[i];
      const Aj = countArr[j];
      sum += Ai * Aj * Math.abs(i - j) ** 2;
    }
  }

  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
