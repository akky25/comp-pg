function main(input) {
  input = input.trim().split("\n");
  const [, X] = input[0].split(" ").map(Number);
  const S = input[1];

  const arrS = S.split("");
  let point = X;
  arrS.forEach((element) => {
    if (element === "o") {
      point += 1;
    } else {
      point = point > 0 ? point - 1 : point;
    }
  });
  console.log(point);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
