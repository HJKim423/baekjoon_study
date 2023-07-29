function solution(n) {
  var answer = 0;
  let startNum = 1;
  while (startNum < n) {
    let sum = 0;
    for (let i = startNum; i <= n; i++) {
      sum += i;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) break;
    }
    startNum++;
  }

  return answer + 1;
}

//"주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다."
