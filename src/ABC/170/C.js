function main(input) {
  input = input.trim().split("\n");
  const [X, N] = input[0].split(" ").map(Number);
  if (N === 0) {
    console.log(X);
    return;
  }

  const p = input[1].split(" ").map(Number);
  for (let i = 0; true; i++) {
    const tgt1 = X - i;
    const tgt2 = X + i;

    const ret1 = p.findIndex((v) => v === tgt1);
    const ret2 = p.findIndex((v) => v === tgt2);

    if (ret1 === -1) {
      console.log(tgt1);
      return;
    }
    if (ret2 === -1) {
      console.log(tgt2);
      return;
    }
  }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
