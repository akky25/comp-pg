function main(input) {
  const a = input.trim();
  if (a <= "Z") {
    console.log("A");
  } else {
    console.log("a");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
