const n = +require('fs').readFileSync(__dirname+'/input.txt');

let f = Array(n+1);

f[0] = 0;
f[1] = 1;

for(let i=2; i<=n; i++){
    f[i] =  BigInt(f[i-1]) + BigInt(f[i-2]);
}
console.log(f[n].toString());