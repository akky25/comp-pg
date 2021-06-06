# Input

##### 要素が１つ

$
N
$

```js
N = input.trim();
```

数値の場合：右辺に単項プラス演算子を追加

---

##### 要素が複数

$
V \hspace{3pt} T  \hspace{3pt} S \hspace{3pt} D
$

```js
const [V, T, S, D] = input.trim().split(" ");
```

数値の場合：split の後に`.map(Number)`をチェーン

---

##### 要素が連結

$
C_{1}C_{2}C_{3}
$

複数変数にそれぞれ格納

```js
const [C1, C2, C3] = input.trim().split("");
```

配列に格納

```js
const C = input.trim().split("");
```

---

##### 2 行がそれぞれの要素に

$
a \hspace{5px} b \\
c \hspace{5px} d \\
$

```js
const [a, b, c, d] = input
  .trim()
  .split("\n")
  .reduce((acc, cur) => acc.concat(cur.split(" ")), []);
```

---

##### ２行目が複数要素

$
N \\
A_{1} \hspace{5px} A_{2} \hspace{5px} ... \hspace{5px} A_{N}
$

```js
input = input.trim().split("\n");
const N = input[0];
const A = input[1].split(" ");
```

---

##### 2 行目以降が N 行

$
N \hspace{8px} X \hspace{8px} Y\\
A_{1} \\
A_{1} \\
・\\
・\\
A_{N} \\
$

```js
input = input.trim().split("\n");
const [N, X, Y] = input.shift().split(" ");
const A = [...input];
```

数値の場合：`split(" ")` の後に`map(Number)`をチェーン

---

##### 2 行目以降が N 行で複数要素

$
N \hspace{8px} X \hspace{8px} Y\\
A_{1} \hspace{5px} B_{1} \\
A_{1} \hspace{5px} B_{1} \\
\hspace{7px}・\\
\hspace{7px}・\\
A_{N} \hspace{5px} B_{N} \\
$

・行毎に配列に格納
`[[A1,B1], [A2, B2], ... , [An, Bn]]`

```js
input = input.trim().split("\n");
const [N, X, Y] = input.shift().split(" ");
const AB = input.map((v) => v.split(" "));
```

・列毎に配列に格納
`[[A1,A2, ..., An], [B1, B2, ..., Bn]]`

```js
input = input.trim().split("\n");
const [N, X, Y] = input.shift().split(" ");
const AB = input.reduce(
  (acc, cur) => {
    const [A, B] = cur.split(" ").map(Number);
    acc[0].push(A);
    acc[1].push(B);
    return acc;
  },
  [[], []]
);
```

数値の場合：`split(" ")` の後に`map(Number)`をチェーン

---

# String

#### 正規表現による文字列検索

文字列に対して正規表現の検索を行う場合、まず正規表現は正規表現リテラルと RegExp コンストラクタのどちらかで表現する。

```js
// 正規表現リテラルで正規表現オブジェクトを作成
const patternA = /パターン/グフラ;
// `RegExp`コンストラクタで正規表現オブジェクトを作成
const patternB = new RegExp("パターン文字列", "フラグ");
```

正規表現リテラルはコードを書いた時点で決まったパターンの正規表現オブジェクトを作成する構文です。 一方で、RegExp コンストラクタは変数と組み合わせるなど、実行時に変わることがあるパターンの正規表現オブジェクトを作成できます。

正規表現での検索には`test()`, `search()` , `match()` も用いる.

##### マッチした文字列を取得を取得したい場合は`match()`

単純にパターンにマッチするかをテストするには`test()`を使う

```js
// 検索対象となる文字列
const str = "にわにはにわにわとりがいる";
// ^ - 検索文字列が先頭ならtrue
console.log(/^にわ/.test(str)); // => true
console.log(/^いる/.test(str)); // => false
// $ - 検索文字列が末尾ならtrue
console.log(/にわ$/.test(str)); // => false
console.log(/いる$/.test(str)); // => true
// 検索文字列が含まれるならtrue
console.log(/にわ/.test(str)); // => true
console.log(/いる/.test(str)); // => true
```

上記は以下のメソッドでも表現可能.
String#startsWith: /^パターン/.test(文字列)
String#endsWith: /パターン$/.test(文字列)
String#includes: /パターン/.test(文字列)

##### インデックスを取得したい場合は`search()`

```js
const str = "ABC123EFG";
const searchPattern = /\d{3}/;
console.log(str.search(searchPattern)); // => 3
```

最初にマッチした箇所のインデックスを返すことに注意
マッチしなかった場合は-1 を返す

##### マッチした文字列を取得を取得したい場合は`match()`

・マッチしない場合は、null を返す
・マッチした場合は、マッチした文字列を含んだ特殊な配列を返す
・正規表現の g フラグがある場合は、マッチしたすべての結果を含んだただの配列を返す

g フラグなしの場合マッチした時点で検索を終了し、戻り値は index プロパティと input プロパティをもった特殊な配列となる.
index:マッチした文字列の先頭のインデックス
input:プロパティには検索対象となった文字列全体

```js
const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
// gフラグなしでは、最初の結果のみを含んだ特殊な配列を返す
const results = str.match(alphabetsPattern);
console.log(results.length); // => 1
// マッチした文字列はインデックスでアクセスできる
console.log(results[0]); // => "ABC"
// マッチした文字列の先頭のインデックス
console.log(results.index); // => 0
// 検索対象となった文字列全体
console.log(results.input); // => "ABC あいう DE えお"
```

g フラグありのパターンで検索した場合、マッチしたすべての文字列を含んだ配列を返す.

```js
const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
// gフラグありでは、すべての検索結果を含む配列を返す
const resultsWithG = str.match(alphabetsPattern);
console.log(resultsWithG.length); // => 2
console.log(resultsWithG[0]); // => "ABC"
console.log(resultsWithG[1]); // => "DE"
// indexとinputはgフラグありの場合は追加されない
console.log(resultsWithG.index); // => undefined
console.log(resultsWithG.input); // => undefined
```

すべてを検索し、さらに index と input プロパティを持つ特殊な配列が欲しい場合は`matchAll()`を使う

```js
const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
// matchAllはIteratorを返す
const matchesIterator = str.matchAll(alphabetsPattern);
for (const match of matchesIterator) {
  // マッチした要素ごとの情報を含んでいる
  console.log(
    `match: "${match[0]}", index: ${match.index}, input: "${match.input}"`
  );
}
// 次の順番でコンソールに出力される
// match: "ABC", index: 0, input: "ABC あいう DE えお"
// match: "DE", index: 8, input: "ABC あいう DE えお"
```

---

# Number

Number 型は`-(2^53 − 1) から 2^53 − 1 の間
つまり 10^15 桁までなら安全に計算可能
この最大値は定数 [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) で取得できる.

```js
console.log(Number.MAX_SAFE_INTEGER);
> 9007199254740991
```

以下のように、最大値を超すと正確に処理ができなくなる.

```js
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(x);
> 9007199254740992

console.log(y);
> 9007199254740992

console.log(x === y);
> true //falseが期待されるがtrueとなる
```

# Array

#### 配列のコピー

```js
const arr = ["ant", "bison", "elephant"];
const newArr = arr.concat();
console.log(newArr);
> ["ant", "bison", "elephant"]
```

#### ソート

[Array.prototype.sort()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
配列を直接書き換えます.

◆ 引数を省略した場合
文字列に変換してから UTF-16 コード単位の値の並びとして比較

```js
const arr = ["c", "d", "a", "e", "b"];
const arr1 = arr.sort();
console.log(arr);
> [ 'a', 'b', 'c', 'd', 'e' ]
```

◆ 引数に比較関数与えた場合
比較関数の返却値によってソート順序が変わる
・compareFunction(a, b) が 0 未満の場合
　 a を b より前にソート
・compareFunction(a, b) が 0 場合
　ソートなし
・compareFunction(a, b) が 0 より大きい場合
　 b を a より前にソート

```js
const arr = [3, 1, 5, 2, 4];
arr.sort((a, b) => a - b);
console.log(arr);
> [ 1, 2, 3, 4, 5 ]
```

#### 要素を取り除いたり、置き換えたり、新しい要素を追加

[Array.prototype.splice()
](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

・要素を取り除く
第１引数に削除をするスタート位置、第２引数に削除する要素数

```js
const arr = [0, 1, 2, 3, 4, 5];
arr.splice(2, 3);
console.log(arr);
> [ 0, 1, 5 ]
```

・置き換える
要素を取り除く引数に加えて、第３引数以降に追加する要素を指定

```js
const arr = [0, 1, 2, 3, 4, 5];
const add = [6, 7];
arr.splice(2, 3, ...add); // 2, 3, 4を削除してaddの要素を追加
console.log(arr);
> [0, 1, 6, 7, 5]
```

・要素を削除せずに任意の位置に追加
第２引数を 0 にして第３引数に追加要素を指定

```js
const arr = [0, 1, 2, 3];
const add = [4, 5];
arr.splice(1, 0, ...add);
console.log(arr);
> [ 0, 4, 5, 1, 2, 3 ]
```

##### 任意の範囲の要素を取り出し

任意の範囲の要素を取り出し返却する. 元の配列は変更しない.
第１引数にスタート位置、第２引数に取り出す要素数

```js
const arr = ["ant", "bison", "camel", "duck", "elephant"];
console.log(arr.slice(2, 4));
> [ 'camel', 'duck' ]
```

# Math

#### 切り捨て

[Math.floor()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

除算後に切り捨てした値を取得したい場合など

```js
console.log(Math.floor(10 / 3));
> 3
```

#### 切り上げ

[Math.ceil()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

```js
console.log(Math.ceil(2.5));
> 3
```

#### 切り上げ

[Math.round()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
小数部分の 0.5 を境界に四捨五入を行う.
負の値の場合は、整数方向に丸められることに注意

```js
Math.round(20.49); //  20
Math.round(20.5); //  21
Math.round(42); //  42
Math.round(-20.5); // -20
Math.round(-20.51); // -21
```

# Object

#### 繰り返し処理

Object 処理を行いたい場合は`Object.keys()`か`Object.entries()`により配列を取得し、`forEach()`でループ処理を行う.

```js
Object.keys(res).forEach((key) => {
  console.log(`${key} x ${res[key]}`);
});

Object.entries(res).forEach(([key, value]) => {
  console.log(`${key} x ${value}`);
});
```

# Tips

## 組み合わせの網羅

組み合わせの中から該当する選び型を数える問題は、ビット演算で行う.
例えば、３つの中から選ぶ場合

```js
const N = 3;
// iを3bit(101, 011, etc...)として考え、111までループさせる
// 1:on 0:offと考える
for (let i = 0; i < 1 << N; i++) {
  let cmb = "";
  // 各桁毎に確認するループ
  for (let j = 0; j < N; j++) {
    // 各桁の毎にビットシフトさせながらon,offを確認する
    const isOn = ((i >> j) & 1) === 1 ? "o" : "x";
    cmb = `${isOn}${cmb}`;
  }
  console.log(cmb);
}
```

```
xxx
xxo
xox
xoo
oxx
oxo
oox
ooo
```

## いずれかに一致

変数がいずれかの値に一致するかの確認には Array の inclues を用いる

```js
const num1 = 3;
const num2 = 4;
const numConds = [1, 2, 3];
if (numConds.includes(num1)) {
  console.log("num1 matches");
  // num1 matches
}
if (numConds.includes(num2)) {
  console.log("num2 matches");
} else {
  console.log("num2 is a mismatche");
  // > num2 is a mismatche
}
```
