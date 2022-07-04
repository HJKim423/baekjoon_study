const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();

let answer = '';
let word='';
let isTag = false;

for(let i=0; i<input.length; i++){
    if(input[i] === '<'){
        isTag = true;
        answer += word.split('').reverse().join(''); // <앞에 단어가 있는경우
        word = '';
        answer += input[i];
    }
    else if(input[i] === '>'){
        isTag = false;
        answer += word;
        word = '';
        answer += input[i];
    }
    else if(input[i] === " "){
        answer += (isTag ? word : word.split('').reverse().join(''));
        word = "";
        answer += input[i];
    }
    else{
        word += input[i];

    }
    
}
answer += word.split('').reverse().join('');


console.log(answer);