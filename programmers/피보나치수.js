function solution(n) {
  var answer = 0;
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  answer = dp[n];
  return answer;
}

// n이 매우 큰 경우 n번째 피보나치 수는 언어가 표현할 수 있는 자료형의 범위를 넘어가, 오버플로우가 납니다. -> 반복문마다 % 연산을 해줍니다. (원래는 마지막에 한번만 했었음)
