const revMatrix = (arr, v) => {
  const [a, b] = v.split(" ").map(Number);
  arr[0].push(a);
  arr[1].push(b);
  return arr;
};

function main(input) {
  input = input.trim().split("\n");
  const N = +input.shift();
  const AB = input.reduce(revMatrix, [[], []]);

  let ans = Infinity;
  AB[0].forEach((va, ia) => {
    AB[1].forEach((vb, ib) => {
      let cst = 0;
      if (ia === ib) {
        cst = va + vb;
      } else {
        cst = Math.max(va, vb);
      }
      ans = Math.min(ans, cst);
    });
  });

  console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
