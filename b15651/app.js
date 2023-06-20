const [N, M] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];

const dfs = L => {
  if (L === M) {
    console.log(result.join(" "));
  } else {
    for (let i = 1; i <= N; i++) {
      result.push(i);
      dfs(L + 1);
      result.pop();
    }
  }
};

dfs(0);
