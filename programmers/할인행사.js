function solution(want, number, discount) {
  var answer = 0;

  function match(mart) {
    let martMap = new Map();
    mart.forEach((v, i) => martMap.set(v, (martMap.get(v) || 0) + 1));
    for (let i = 0; i < want.length; i++) {
      if (martMap.get(want[i]) !== number[i]) return false;
    }
    return true;
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    let mart = discount.slice(i, i + 10);
    if (match(mart)) answer++;
  }
  return answer;
}
