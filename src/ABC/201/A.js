function main(input) {
  const A = input.trim().split(" ");
  A.sort((a, b) => a - b);
  if (A[2] - A[1] === A[1] - A[0]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
