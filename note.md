# Input

###### 要素が１つ

$
N
$

```js
N = input.trim();
```

数値の場合：右辺に単項プラス演算子を追加

---

###### 要素が複数

$
V \hspace{3pt} T  \hspace{3pt} S \hspace{3pt} D
$

```js
const [V, T, S, D] = input.trim().split(" ");
```

数値の場合：split の後に`.map(Number)`をチェーン

---

###### 要素が連結

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

###### 2 行目以降が N 行

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

###### 2 行目以降が N 行で複数要素

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
