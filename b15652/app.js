const [N, M] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];

const dfs = (L, idx) => {
  if (L === M) {
    console.log(result.join(" "));
  } else {
    for (let i = idx; i <= N; i++) {
      result.push(i);
      dfs(L + 1, i);
      result.pop();
    }
  }
};

dfs(0, 1);
