const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const TestCase = +input.shift();

let cnt = 0;
const dfs = (L, n) => {
  if (n === 0) {
    cnt++;
  } else if (n < 0) {
    return;
  } else {
    for (let i = 1; i <= 3; i++) {
      dfs(L + 1, n - i);
    }
  }
  return cnt;
};

for (let i = 0; i < TestCase; i++) {
  const n = +input[i];

  console.log(dfs(0, n));
  cnt = 0;
}
