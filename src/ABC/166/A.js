function main(input) {
  const S = input.trim().split("\n")[0];

  const ABC = "ABC";
  const ARC = "ARC";

  if (S === ABC) {
    console.log(ARC);
  } else {
    console.log(ABC);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
