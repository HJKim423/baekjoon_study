const [N, M] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = Array.from({ length: N + 1 }, () => 0);
let result = [];

const dfs = L => {
  if (L === M) {
    console.log(result.join(" "));
  } else {
    for (let i = 1; i <= N; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        result.push(i);
        dfs(L + 1);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

dfs(0);
