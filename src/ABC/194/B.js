function main(input) {
  input = input.trim().split("\n");
  const N = +input.shift();
  const AB = input.map((v) => v.split(" ").map(Number));

  let min1A = Infinity;
  let min1B = Infinity;
  let indexa = 0;
  let min2A = Infinity;
  let min2B = Infinity;
  let indexb = 0;
  let minAB = Infinity;

  AB.forEach((elm, index) => {
    if (elm[0] < min1A) {
      min2A = min1A;
      min1A = elm[0];
      indexa = index;
    } else if (elm[0] < min2A) {
      min2A = elm[0];
    }
    if (elm[1] < min1B) {
      min2B = min1B;
      min1B = elm[1];
      indexb = index;
    } else if (elm[1] < min2B) {
      min2B = elm[1];
    }

    if (elm[0] + elm[1] < minAB) {
      minAB = elm[0] + elm[1];
    }
  });
  if (indexa !== indexb) {
    console.log(Math.max(min1A, min1B));
  } else if (min1A + min1B < min2A || min1A + min1B < min2B) {
    console.log(min1A + min1B);
  } else {
    const a = Math.max(min1A, min2B);
    const b = Math.max(min2A, min1B);
    console.log(Math.min(a, b));
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
