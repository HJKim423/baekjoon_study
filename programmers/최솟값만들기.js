function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.map((v, i) => {
    answer += v * B[i];
  });

  return answer;
}

//곱하기 이므로 최소가 나오려면 가장 큰 수끼리 곱해지는 일을 피해야함
//따라서 A의 최소와 B의 최대가 곱해지는 식으로 되도록 sort를 이용해야함
