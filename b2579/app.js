const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n').map(Number);
const TestCase = +input.shift();

let dp = Array(TestCase);