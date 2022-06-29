const [N, K] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);

solution();

function solution(){
    let answer = 0;

    for(let i=0; i<=N; i++){ //시
        for(let j=0; j<=59; j++){ //분
            for(let k=0; k<=59; k++){ //초
            
                let time = String(i).padStart(2, '0') + String(j).padStart(2, '0') + String(k).padStart(2, '0');
                if(time.includes(K)) answer++;
            }
        }

    }
    console.log(answer);
}