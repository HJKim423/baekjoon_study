function solution(s) {
  var answer = true;

  const sArr = s.split("");
  let stack = [];

  if (sArr[0] === ")") answer = false;
  else {
    sArr.map(v => {
      if (v === "(") stack.push(1);
      else stack.pop();
    });

    if (stack.length) answer = false;
  }

  return answer;
}

//map 대신 for문 사용했을때는 시간초과가 났다.
//for문 보다 map이 속도가 빠르다.
