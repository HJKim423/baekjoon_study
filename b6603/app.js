const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
let answer = "";
const dfs = (L, arr, visited, k) => {
  if (L === 6) {
    answer += result.join(" ");
    answer += "\n";
    return;
  } else {
    for (let i = L; i < k; i++) {
      if (visited[i] === 0) {
        if (L >= 1 && result.at(-1) > arr[i]) continue;
        visited[i] = 1;
        result.push(arr[i]);
        dfs(L + 1, arr, visited, k);
        result.pop();
        visited[i] = 0;
      }
    }
  }
};

let result = [];
for (let i = 0; i < input.length - 1; i++) {
  let [k, ...arr] = input[i].split(" ").map(Number);
  let visited = Array.from({ length: k }, () => 0);
  dfs(0, arr, visited, k);
  answer += "\n";
}

console.log(answer);
