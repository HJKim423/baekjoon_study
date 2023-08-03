function solution(arr) {
  var answer = 1;
  arr.sort((a, b) => b - a);
  //최대 공약수
  function gcd(a, b) {
    while (b > 0) {
      let temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }

  //최소공배수 구하기
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
}

//유클리드 호제법 사용
