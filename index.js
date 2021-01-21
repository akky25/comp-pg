function main(input) {
  console.log("main start");
  console.log(input);
}

console.log("start");
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main("hello");

console.log("end");
