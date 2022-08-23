const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim();

let word = input.split("").map(v=>{
    if(v === "A") return "X";
    else if(v === "B") return "Y";
    else if(v === "C") return "Z";
    else return String.fromCharCode(v.charCodeAt() - 3);
})

console.log(word.join(""));