const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m, r] = input.shift().split(" ").map(Number);

const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  arr[i][0] = arr[i - 1][0];
}
