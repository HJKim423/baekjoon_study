const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = [...input.shift().split(" ")].map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [];
let answer = "";

const dfs = L => {
  if (L === M) {
    answer += result.join(" ");
    answer += "\n";
  } else {
    for (let i = 0; i < N; i++) {
      result.push(arr[i]);
      dfs(L + 1);
      result.pop();
    }
  }
};

dfs(0);
console.log(answer.trim()); //재귀함수 내에서 콘솔을 반복적으로 출력하는 것은 시간초과가 날 수 있음!
