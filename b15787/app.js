const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const trains = Array.from({ length: n }, () =>
  Array.from({ length: 20 }).fill(0)
);

for (let i = 0; i < m; i++) {
  const order = input[i].split(" ").map(Number);
  if (order[0] === 1) {
    trains[order[1] - 1][order[2] - 1] = 1;
  } else if (order[0] === 2) {
    trains[order[1] - 1][order[2] - 1] = 0;
  } else if (order[0] === 3) {
    trains[order[1] - 1].unshift(0);
    trains[order[1] - 1].pop();
  } else {
    trains[order[1] - 1].shift();
    trains[order[1] - 1].push(0);
  }
}

//set으로 중복제거하기위해 문자열로 바꿔줌
const trains_string = trains.map(v => {
  return v.join("");
});

const answer = new Set(trains_string);

console.log([...answer].length);
