const n = +require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let result = [];
let visited = Array.from({ length: n + 1 }, () => 0);
const dfs = L => {
  if (L === n) {
    console.log(result.join(" "));
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      if (visited[i] === 0) {
        result.push(i);
        visited[i] = 1;
        dfs(L + 1);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

dfs(0);
