const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(Number);
const dna = input.map(v=> v.trim());

let arr=[];
let result = '';
let cnt = 0;

for(let i=0; i<M; i++){
    // let num = {A : 0, C : 0, G : 0, T: 0 }
    let a = 0;
    let c = 0;
    let g = 0;
    let t = 0;
    for(let j=0; j<N; j++){
        if(dna[j][i] === 'A') a++;
        else if(dna[j][i] === 'C') c++; 
        else if(dna[j][i] === 'G') g++;
        else t++; 
    }

    if(Math.max(a,c,g,t) === a) result += 'A';
    else if(Math.max(a,c,g,t) === c) result += 'C';
    else if(Math.max(a,c,g,t) === g) result += 'G';
    else if(Math.max(a,c,g,t) === t) result += 'T';

}

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if(result[j] !== dna[i][j]) cnt++;
    }
}

console.log(result);
console.log(cnt);