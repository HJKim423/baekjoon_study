function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  for (let i = brown / 2 - 1; i >= 1; i--) {
    let sero = brown / 2 - i + 2;
    if (i * sero === sum) {
      answer = [i, sero];
      break;
    }
  }
  return answer;
}
