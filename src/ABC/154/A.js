function main(input) {
  input = input.trim().split("\n");
  const [S, T] = input[0].split(" ");
  let [A, B] = input[1].split(" ").map(Number);
  const U = input[2];

  if (U === S) {
    A -= 1;
  } else if (U === T) {
    B -= 1;
  }
  console.log(A, B);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
