const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n').map(v=>v.trim());
let maxLng = 0;
let answer = '';

input.map((v,i)=>{
    if(v.length > maxLng){
        maxLng = v.length;
    }
})

for(let i=0; i<maxLng; i++){
    for(let j=0; j<input.length; j++){
        if(input[j][i] === '' || input[j][i] === undefined){
            answer += '';
        }else{
            answer += input[j][i];
        }
        

    }
}

console.log(answer);