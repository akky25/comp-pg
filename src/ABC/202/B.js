function main(input) {
  const S = input.trim().split("");
  let a = "";
  S.forEach((element) => {
    if (element === "6") {
      a = `9${a}`;
    } else if (element === "9") {
      a = `6${a}`;
    } else {
      a = `${element}${a}`;
    }
  });
  console.log(a);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
