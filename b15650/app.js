const [N, M] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = new Array(N + 1).fill(0);
let result = [];

const dfs = (L, idx) => {
  if (L === M) {
    console.log(result.join(" "));
  } else {
    for (let i = idx; i <= N; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        result.push(i);
        dfs(L + 1, i);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

dfs(0, 1);
