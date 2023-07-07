const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();

let dp = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  if (i + t > n) continue;
  dp[i] += p; //누적
  for (let j = i + t; j < n; j++) {
    dp[j] = Math.max(dp[j], dp[i]); //최대값으로 변경
  }
}

console.log(Math.max(...dp));
