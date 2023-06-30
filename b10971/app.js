const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
let city = [];
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  city.push(input[i].split(" ").map(Number));
}

const calculation = arr => {
  let sum = 0;
  for (let k = 0; k < n - 1; k++) {
    let i = arr[k];
    let j = arr[k + 1];
    //따라서 도시 i에서 도시 j로 갈 수 없는 경우도 있으며 이럴 경우 W[i][j]=0이라고 하자.
    if (city[i][j] === 0) {
      sum = Number.MAX_SAFE_INTEGER;
    } else {
      sum += city[i][j];
    }
  }

  if (city[arr.slice(-1)][0] === 0) {
    // 마지막 도시에서 출발도시로 가는 경우도 갈 수 없을 수 있음
    sum = Number.MAX_SAFE_INTEGER;
  } else {
    sum += city[arr.slice(-1)][0];
  }
  return sum;
};

let result = [];
let visited = Array.from({ length: n }, () => 0);
const dfs = L => {
  if (L === n) {
    answer = Math.min(calculation(result), answer);
  } else {
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        result.push(i);
        dfs(L + 1);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

visited[0] = 1;
result.push(0);
dfs(1);

console.log(answer);
