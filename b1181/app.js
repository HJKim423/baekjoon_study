const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n').map(v=>v.trim());
const N = +input.shift();

const set = new Set(input);
const uniqueArr = [...set];

uniqueArr.sort((a,b)=>{
    if(a.length !== b.length){
        return a.length - b.length;
    }
    if(a<b){
        return -1;
    }
});


uniqueArr.map(v=>console.log(v));