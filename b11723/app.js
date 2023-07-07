//백준에서는 node.js 메모리초과

const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
let s = [];
for (let i = 0; i < n; i++) {
  const [check, num] = input[i].split(" ");

  if (check === "add") {
    if (s.includes(num)) continue;
    s.push(num);
  } else if (check === "remove") {
    if (!s.includes(num)) continue;
    let idx = s.indexOf(num);
    s.slice(idx, idx + 1);
  } else if (check === "check") {
    if (s.includes(num)) console.log(1);
    else console.log(0);
  } else if (check === "toggle") {
    if (!s.includes(num)) {
      s.push(num);
    } else {
      let idx = s.indexOf(num);
      s.slice(idx, idx + 1);
    }
  } else if (check === "all") {
    s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  } else {
    s = [];
  }
}
