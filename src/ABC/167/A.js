function main(input) {
  const [S, T] = input.trim().split("\n");
  if (S === T.substr(0, T.length - 1) && /[a-z]$/.test(T)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
