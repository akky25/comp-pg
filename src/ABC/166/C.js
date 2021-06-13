function main(input) {
  input = input
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  const [N, M] = input[0];
  const H = input[1];
  const AB = input.slice(2);

  const s = new Set([...Array(N)].map((_, i) => i + 1));

  AB.forEach((elem) => {
    const [tgt1, tgt2] = [elem[0], elem[1]];
    if (H[tgt1 - 1] > H[tgt2 - 1]) {
      s.delete(tgt2);
    } else if (H[tgt1 - 1] < H[tgt2 - 1]) {
      s.delete(tgt1);
    } else {
      s.delete(tgt1);
      s.delete(tgt2);
    }
  });

  console.log(s.size);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
