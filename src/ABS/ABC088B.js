function main(i) {
  const input = i.trim().split("\n");
  let cards = input[1].split(" ").map(Number);

  cards = cards.sort((a, b) => b - a);
  let alice = 0;
  let bob = 0;
  cards.forEach((value, index) => {
    if (index % 2 === 0) {
      alice += value;
    } else {
      bob += value;
    }
  });

  console.log(alice - bob);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
