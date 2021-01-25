function main(i) {
  const input = i.trim().split("\n");
  const line2 = input[1].split(" ").map((v) => parseInt(v, 10));

  let num = 1000000000;

  line2.forEach((element) => {
    let count = 0;
    let tgt = element;
    while (tgt % 2 === 0) {
      tgt /= 2;
      count += 1;
    }
    num = count < num ? count : num;
  });

  console.log(num);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
