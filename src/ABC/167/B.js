function main(input) {
  const [A, B, C, K] = input.trim().split(" ").map(Number);

  let remaining = K;
  let res = 0;
  if (remaining > A) {
    res += A;
    remaining -= A;
  } else {
    console.log(remaining);
    return;
  }
  if (remaining > B) {
    remaining -= B;
  } else {
    console.log(res);
    return;
  }
  if (remaining > C) {
    res -= C;
  } else {
    res -= remaining;
  }
  console.log(res);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
