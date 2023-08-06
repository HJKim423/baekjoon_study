function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    let x = Math.floor(i / n);
    let y = i % n;
    answer.push(Math.max(x, y) + 1);
  }
  return answer;
}
