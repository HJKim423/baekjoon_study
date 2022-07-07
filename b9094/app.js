const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const TestCase = input.shift();
let n,m;

for(let i=0; i<TestCase; i++){
    let answer = 0;
    [n, m] = input[i].split(" ").map(Number);

    for(let a=1; a<n-1; a++){
        for(let b=a+1; b<n; b++){
            let math = (a*a + b*b + m) / (a*b);
            if(math === Math.floor(math)){
                answer++;
            }
        }

    }
    console.log(answer);
}

