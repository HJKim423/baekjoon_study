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
let visited = Array.from({ length: N }, () => 0);

const dfs = (L, idx) => {
  if (L === M) {
    answer.push(result.join(" "));
  } else {
    for (let i = idx; i < N; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        result.push(arr[i]);
        dfs(L + 1, i);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

dfs(0, 0);

const set = new Set(answer);
console.log([...set].join("\n"));
