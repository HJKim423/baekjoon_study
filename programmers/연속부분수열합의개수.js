function solution(elements) {
  var answer = 0;
  let extendElem = [...elements, ...elements];
  const len = elements.length;
  let result = [];

  for (let j = 0; j < extendElem.length; j++) {
    for (let i = 1; i <= len; i++) {
      result.push(extendElem.slice(j, j + i).reduce((acc, cur) => acc + cur));
    }
  }

  answer = new Set([...result]); //중복제거
  return answer.size;
}
