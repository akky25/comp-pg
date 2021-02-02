function main(input) {
  input = input.trim().split("\n");
  const arrA = input[1].split(" ").map(Number);
  const arrB = input.slice(3).map((v) => v.split(" ").map(Number));

  let sum = 0;
  const mapA = arrA.reduce((arr, elm) => {
    arr[elm] = (arr[elm] || 0) + 1;
    sum += elm;
    return arr;
  }, []);

  arrB.forEach((elm) => {
    const [b, c] = elm;
    const count = mapA[b] || 0;
    mapA[b] = 0;
    mapA[c] = (mapA[c] || 0) + count;
    sum += (c - b) * count;
    console.log(sum);
  });
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
