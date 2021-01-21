function main(input) {
  const lines = input.trim().split("\n");

  const n = +lines[0];
  const a = lines[1].split(" ");
  const b = lines[2].split(" ");

  let ip = 0;
  for (let i = 0; i < n; i += 1) {
    ip += +a[i] * +b[i];
  }
  console.log(ip === 0 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
