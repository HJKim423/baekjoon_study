solution();

function solution(){
    for(let i=1; i<=10000; i++){
        let self =true;
        for(let j=0; j<i; j++){
            if(
                j +
                Math.floor(j/1000) + 
                Math.floor(j%1000/100) + 
                Math.floor(j%100/10) + 
                Math.floor(j%10) 
                === i
            )
            self = false;
        }
        if(self) console.log(i);
    }

    // let n = 4;
    // console.log(Math.floor(n/1000));
    // console.log(Math.floor(n%1000/100));
    // console.log(Math.floor(n%100/10));
    // console.log(Math.floor(n%10));

}