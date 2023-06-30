const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
let answer = 0;

const calculation = arr => {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

let result = [];
let visited = Array.from({ length: n }, () => 0);
const dfs = L => {
  if (L === n) {
    // console.log(result);
    answer = Math.max(calculation(result), answer);
  } else {
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        result.push(arr[i]);
        dfs(L + 1);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

dfs(0);
console.log(answer);
