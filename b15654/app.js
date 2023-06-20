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
let visited = Array.from({ length: N }, () => 0);

const dfs = L => {
  if (L === M) {
    console.log(result.join(" "));
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      result.push(arr[i]);
      dfs(L + 1);
      result.pop();
      visited[i] = 0;
    }
  }
};
dfs(0);
