function solution(land) {
  var answer = 0;

  let dp = Array.from({ length: land.length }, () => Array(4).fill(0));
  dp[0][0] = land[0][0];
  dp[0][1] = land[0][1];
  dp[0][2] = land[0][2];
  dp[0][3] = land[0][3];

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        sum = Math.max(sum, land[i][j] + dp[i - 1][k]);
      }
      dp[i][j] = sum;
    }
  }
  answer = Math.max(...dp[land.length - 1]);
  return answer;
}
