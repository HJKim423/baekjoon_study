const [A, P] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ');

let arr = [+A];
let i=0;

while(true){
    let num = arr[i].toString().split('');
    let sum =0;
    for(let k=0; k<num.length; k++){
        sum += Math.pow(num[k], P);
    }
    if(arr.includes(sum)){
        console.log(arr.indexOf(sum));
        break;
    }
    arr.push(sum);
    i++;
}

