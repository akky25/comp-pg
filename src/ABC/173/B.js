function main(input) {
  input = input.trim().split("\n");
  const [N] = input.shift().split(" ").map(Number);
  const S = [...input];

  const res = {
    AC: 0,
    WA: 0,
    TLE: 0,
    RE: 0,
  };

  S.forEach((s) => {
    res[s] += 1;
  });

  Object.entries(res).forEach(([key, value]) => {
    console.log(`${key} x ${value}`);
  });
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./src/testdata/tmp.txt", "utf8"));
