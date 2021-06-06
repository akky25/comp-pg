function main(input) {
  input = input.trim().split(" ");
  input.forEach((v, i) => {
    if (Number(v) === 0) {
      console.log(i + 1);
    }
  });
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
