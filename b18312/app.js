const [N, K] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);

let cnt = 0;

for(let i=0; i<=N; i++){
    for(let j=0; j<=59; j++){
        for(let k=0; k<=59; k++){
            let time = i.toString().padStart(2,'0') + j.toString().padStart(2, '0') + k.toString().padStart(2, '0');
            if(time.includes(K)) cnt++;

        }
    }
}

console.log(cnt);