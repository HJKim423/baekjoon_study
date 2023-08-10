function solution(n, t, m, p) {
  var answer = "";
  const maxLen = t * m;
  let str = "";
  for (let i = 0; i < maxLen; i++) {
    str += i.toString(n);
  }
  let turn = 1;
  for (let i = 0; i < str.length; i++) {
    if (turn === p) answer += str[i];
    if (answer.length === t) {
      break;
    }
    if (turn === m) turn = 1;
    else turn++;
  }
  return answer.toUpperCase();
}
