const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
const n = +input.shift();

function isPalindrime(word){
    let start = 0;
    let end = word.length-1; 
    let cnt = 0;
    while(start< end){
        
        if(word[start] === word[end]){
            start++;
            end--;
        }else{
            if(word[start+1] === word[end] && start<end){
                start++;
                cnt++;
            }
            else if(word[start] === word[end-1] && start<end){
                end--;
                cnt++;
            }
            else{
                return 2;
            }
        }
        
        if(end-start <= 1) break;
    }
    
    if(cnt === 0) return 0;
    else if(cnt === 1) return 1;
    else return 2;

}

for(let i=0; i<n; i++){
    console.log(isPalindrime(input[i].trim()));
}