/* eslint-disable no-unused-vars */
/*
  入力値の処理例
  以下の形式を全てnumber型で取得する例(ABC190_Cを参考)
  =======
  N M
  A1 B1
  .
  .
  .
  Am Am
  K
  C1 D1
  .
  .
  .
  Ck Dk
  =======
*/

function main(input) {
  let input1 = input.concat();

  // やり方１ Numberにするのは各変数に入れるときにやるパターン
  input1 = input1.trim().split("\n");
  const [N, M] = input1.shift().split(" ").map(Number);
  const AB = input1.splice(0, M).map((v) => v.split(" ").map(Number));
  const K = +input1.shift();
  const CD = input1.map((v) => v.split(" ").map(Number));

  let input2 = input.concat();

  // やり方２ Numberにするのは最初に一括でやるパターン
  input2 = input2
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const [N2, M2] = input2.shift();
  const AB2 = input2.splice(0, M);
  const K2 = input2.shift()[0]; // 注意：要素が１つの場合は配列の１地番目を指定
  const CD2 = input2.concat();
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
