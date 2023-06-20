const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = [...input.shift().split(" ")].map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [];
let answer = [];

const dfs = L => {
  if (L === M) {
    answer.push(result.join(" "));
  } else {
    for (let i = 0; i < N; i++) {
      result.push(arr[i]);
      dfs(L + 1, i);
      result.pop();
    }
  }
};

dfs(0);

const set = new Set(answer);
console.log([...set].join("\n"));
