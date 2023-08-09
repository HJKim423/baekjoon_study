function solution(phone_book) {
  var answer = true;
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].slice(0, phone_book[i].length) === phone_book[i])
      return false;
  }
  return answer;
}
//문자열을 정렬하면 사전순으로 정렬된다. 그 상태에서 반복문에서 앞뒤만 비교하면 접두어인지 판별 가능
