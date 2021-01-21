function main(input) {
  let [n, rateArr] = input.trim().split("\n");

  let players = [];
  rateArr.split(" ").forEach((v, i) => {
    players.push({
      number: i + 1,
      rate: +v,
    });
  });

  let lastLoser;
  for (let i = 1; i <= +n; i++) {
    let tmp = [];
    // for (j = 1; j <= 2 ** (n - i); j++) {
    //   const player1 = players[2 * j - 1 - 1];
    //   const player2 = players[2 * j - 1];
    for (let j = 0; j <= 2 ** (n - i) - 1; j++) {
      const player1 = players[2 * j];
      const player2 = players[2 * j + 1];
      if (player1.rate > player2.rate) {
        tmp.push(player1);
        lastLoser = player2;
      } else {
        tmp.push(player2);
        lastLoser = player1;
      }
    }
    players = tmp.concat();
  }
  console.log(lastLoser.number);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main("4\n6 13 12 5 3 7 10 11 16 9 8 15 2 1 14 4");
