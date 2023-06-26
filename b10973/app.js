const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
const beforeArr = input.shift().split(" ").map(Number);
const lastArr = [...beforeArr].sort((a, b) => a - b);

if (beforeArr.every((v, i) => lastArr[i] === v)) {
  //내림차순 정렬한 배열과 요소가 같은 경우 마지막 배열임
  console.log(-1);
} else {
  //뒤에서부터 내림차순이 끝나는 idx === changeAIdx
  let changeAIdx = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (beforeArr[i] < beforeArr[i - 1]) {
      changeAIdx = i - 1;
      break;
    }
  }

  //changeAIdx 뒤의 요소들 중 changeAIdx보다는 작으면서 뒤의 요소들 중에서 가장 큰수 === changeBVal
  let changeBIdx = 0;
  let changeBVal = Number.MIN_SAFE_INTEGER;
  for (let i = changeAIdx + 1; i < n; i++) {
    if (beforeArr[i] < beforeArr[changeAIdx]) {
      changeBVal = Math.max(changeBVal, beforeArr[i]);
    }
  }
  changeBIdx = beforeArr.indexOf(changeBVal);

  //changeAIdx요소와 changeBidx요소를 swap
  let temp = beforeArr[changeAIdx];
  beforeArr[changeAIdx] = changeBVal;
  beforeArr[changeBIdx] = temp;

  //swap후 chaneAIdx 뒤의 요소들을 내림차순 정렬
  let answer = [];
  answer.push(beforeArr.slice(0, changeAIdx + 1).join(" "));
  answer.push(
    beforeArr
      .slice(changeAIdx + 1)
      .sort((a, b) => b - a)
      .join(" ")
  );
  console.log(answer.join(" ").trim());
}
