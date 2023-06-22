const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const k = +input.shift();
const arr = input.shift().split(" ").map(Number);

console.log(arr);

const node_num = arr.length;

let queue = [];

queue.push(1);
