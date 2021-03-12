function main(input) {
  const [A, B] = input.trim().split(" ").map(Number);
  if (A + B >= 15 && B >= 8) {
    console.log("1");
  } else if (A + B >= 10 && B >= 3) {
    console.log("2");
  } else if (A + B >= 3) {
    console.log("3");
  } else {
    console.log("4");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
