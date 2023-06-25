const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m, v] = input.shift().split(" ").map(Number);

let arr = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }).fill(0)
);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  arr[a][b] = 1;
  arr[b][a] = 1;
}

let visited = Array.from({ length: n + 1 }, () => 0);
let answer = [];

const dfs = v => {
  if (answer.length === n) {
    console.log(answer.join(" "), "!!");
  }
  for (let i = 1; i <= n; i++) {
    if (arr[v][i] === 1 && visited[i] === 0) {
      visited[i] = 1;
      answer.push(i);
      dfs(i);
    }
  }
};

visited[v] = 1;
answer.push(v);
dfs(v);

let visitedB = Array.from({ length: n + 1 }, () => 0);
let answerB = [];
let queue = [];
const bfs = v => {
  queue.push(v);
  visitedB[v] = 1;
  answerB.push(v);
  while (queue.length) {
    let val = queue.shift();

    for (let i = 1; i <= n; i++) {
      if (arr[val][i] === 1 && visitedB[i] === 0) {
        visitedB[i] = 1;
        answerB.push(i);
        queue.push(i);
      }
    }
  }
};

bfs(v);
console.log(answerB.join(" "), "??");
