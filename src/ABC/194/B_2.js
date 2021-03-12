const aryMin = (a, b) => Math.min(a, b);

function main(input) {
  input = input.trim().split("\n");
  const N = +input.shift();

  // const A = new Array(N);
  // const B = new Array(N);
  const A = [];
  const B = [];
  input.forEach((element) => {
    const [a, b] = element.split(" ").map(Number);
    A.push(a);
    B.push(b);
  });

  const minA = A.reduce(aryMin);
  const minIndexA = A.indexOf(minA);
  const minB = B.reduce(aryMin);
  const minIndexB = B.indexOf(minB);

  if (minIndexA === minIndexB) {
    A.splice(minIndexA, 1);
    B.splice(minIndexB, 1);

    const candidate1 = Math.max(minA, B.reduce(aryMin));
    const candidate2 = Math.max(minB, A.reduce(aryMin));

    const ans = Math.min(minA + minB, candidate1, candidate2);
    console.log(ans);
  } else {
    console.log(Math.max(minA, minB));
  }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
