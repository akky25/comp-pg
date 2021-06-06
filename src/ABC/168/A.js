function main(input) {
  const N = +input.trim().split("\n");

  const onesPlace = N % 10;
  const hon = [2, 4, 5, 7, 9];
  const pon = [0, 1, 6, 8];
  const bon = [3];

  if (hon.includes(onesPlace)) {
    console.log("hon");
  } else if (pon.includes(onesPlace)) {
    console.log("pon");
  } else if (bon.includes(onesPlace)) {
    console.log("bon");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
