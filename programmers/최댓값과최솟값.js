function solution(s) {
  var answer = "";
  const temp = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const min = temp[0];
  const max = temp.slice(-1);
  answer = min + " " + max;
  console.log(temp);
  return answer;
}
