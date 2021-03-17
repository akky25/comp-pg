function main(input) {
  const N = input.trim();
  let sum = 0;
  N.split("").forEach((char) => {
    sum += +char;
  });

  console.log(sum % 9 === 0 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
