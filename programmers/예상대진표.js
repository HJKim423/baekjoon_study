function solution(n, a, b) {
  var answer = 0;

  if (a > b) {
    while (n > 1 && a > b) {
      n = n / 2;
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
    }
  } else {
    while (n > 1 && a < b) {
      n = n / 2;
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
    }
  }

  return answer;
}

// 다른 사람 풀이
// while(a !== b){
//        a = Math.round(a/2);
//        b = Math.round(b/2);
//        answer ++
//    }
