function main(input) {
  input = input.trim();

  const ptn1 = /^dreamer([de]|$)/;
  const ptn2 = /^dream([de]|$)/;
  const ptn3 = /^eraser([de]|$)/;
  const ptn4 = /^erase([de]|$)/;

  let flg = true;
  while (flg) {
    if (ptn1.test(input)) {
      input = input.substring(7);
    } else if (ptn2.test(input)) {
      input = input.substring(5);
    } else if (ptn3.test(input)) {
      input = input.substring(6);
    } else if (ptn4.test(input)) {
      input = input.substring(5);
    } else {
      console.log("NO");
      flg = false;
    }

    if (input.length === 0) {
      console.log("YES");
      flg = false;
    }
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
