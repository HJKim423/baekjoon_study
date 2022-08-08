const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
const n = +input.shift();

function check(word, start, end){
    while(start<end){
        if(word[start] === word[end]){
            start++;
            end--;
        }else{
            return false;
        }
    }
    return true;
}


function isPalindrime(word){
    let start = 0;
    let end = word.length-1; 
    while(start< end){
        if(word[start] === word[end]){
            start++;
            end--;
        }
        else{
            if (check(word, start + 1, end) || check(word, start, end - 1)){
                return 1;
            }
            else return 2;
        }
    }
    
    return 0;

}
for(let i=0; i<n; i++){
    console.log(isPalindrime(input[i].trim()));
}