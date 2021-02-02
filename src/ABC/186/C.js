function main(input) {
  input = input.trim();
  let cnt = 0;
  for (let i = 1; i <= input; i++) {
    const num10 = Number(i).toString();
    const num8 = Number(i).toString(8);
    if (num10.includes("7") || num8.includes("7")) {
      cnt += 1;
    }
  }

  console.log(+input - cnt);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
