function solution(s) {
  var answer = [];
  let count = 0;
  let zeroNum = 0;

  while (s.length > 1) {
    count++;
    const prevLen = s.length;
    s = s.split("0").join("");
    zeroNum += prevLen - s.length;
    s = s.length.toString(2);
  }

  answer = [count, zeroNum];
  return answer;
}

//length를 이용해서 간단하게 계산
