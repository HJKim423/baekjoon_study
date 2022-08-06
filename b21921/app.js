const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let end = 0;
let sum = 0;
let max = 0;
let count = 1;

for(let i=0;i<N;i++){
    while((end-i<X) && end<N){
        sum += arr[end];
        end++;
    }

    if(max === sum){
        count++;
    }
    else if(max<sum){
        max = sum;
        count = 1;
    }

    sum -=arr[i];
}


if(max === 0){
    console.log("SAD");
}
else{
    console.log(max);
    console.log(count);
}

