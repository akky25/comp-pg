function main(input) {
  input = input.trim().split("\n");
  let [H, W, X, Y] = input.shift().split(" ").map(Number);
  const S = input.map((v) => v.split(""));

  X -= 1;
  Y -= 1;
  let sum = S[X][Y] === "." ? 1 : 0;

  for (let i = Y - 1; i >= 0 && S[X][i] === "."; i--) sum += 1;
  for (let i = Y + 1; i < W && S[X][i] === "."; i++) sum += 1;
  for (let i = X - 1; i >= 0 && S[i][Y] === "."; i--) sum += 1;
  for (let i = X + 1; i < H && S[i][Y] === "."; i++) sum += 1;

  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
