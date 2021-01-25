function main(i) {
  const input = i.trim().split("\n");
  const line2 = input[1].split(" ").map((v) => parseInt(v, 10));

  let tmp = line2;
  let count = 0;
  while (true) {
    if (tmp.every((v) => v % 2 === 0)) {
      tmp = tmp.map((v) => v / 2);
      count += 1;
    } else {
      break;
    }
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
