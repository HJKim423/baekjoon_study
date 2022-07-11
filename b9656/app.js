const n = +require('fs').readFileSync(__dirname+'/input.txt');

if(n % 2 === 0) console.log("SK");
else console.log("CY");