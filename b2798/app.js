const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')
const [n, m] = inputData[0].split(' ').map(Number);
const item = inputData[1].split(' ').map(Number);

solution();

function solution(){
    let answer = 0;
    for(let i=0;i <n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                let sum = item[i]+item[j]+item[k];
                
                //세장의 합이 answer보다 크고 m보다 작거나 같으면 answer에 저장
                if(sum>answer && sum <= m) answer = sum;
            }
        }
    }

    console.log(answer);
}