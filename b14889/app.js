const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

//팀 나눔
const set_team = res => {
  let teamA = res;
  let teamB = [];
  for (let i = 0; i < n; i++) {
    if (!teamA.includes(i)) teamB.push(i);
  }

  answer = Math.min(answer, Math.abs(calc(teamA) - calc(teamB)));
};

let answer = Number.MAX_SAFE_INTEGER;
//능력치계산
const calc = team => {
  let sum = 0;
  for (let i = 0; i < team.length - 1; i++) {
    for (let j = i; j < team.length; j++) {
      sum += arr[team[i]][team[j]] + arr[team[j]][team[i]];
    }
  }
  return sum;
};

//순열이용
let result = [];
let visited = Array.from({ length: n }, () => 0);
const dfs = L => {
  if (L === n / 2) {
    set_team(result);
  } else {
    for (let i = L; i < n; i++) {
      if (visited[i] === 0) {
        if (result.length >= 1 && i < result.at(-1)) continue;
        visited[i] = 1;
        result.push(i);
        dfs(L + 1);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

dfs(0);

console.log(answer);
