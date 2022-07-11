const n = +require('fs').readFileSync(__dirname+'/input.txt');

let movie = 666;
let cnt = 0;
while (true){
    if(movie.toString().includes('666')){
        cnt++;
        console.log(cnt, movie);
    }
    if(cnt === n) break;
    movie++;

}

console.log(movie);