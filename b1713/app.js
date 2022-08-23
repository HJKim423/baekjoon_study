const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const n = +input[0];
const m = +input[1];
const candidate_num = input[2].split(" ").map(Number);

let pictures = [];

for(let i=0; i<m; i++){
    let flag = false;
    pictures.map((v,idx)=> {//사진틀에 있는 후보자를 추천받은 경우
        if(v[0] === candidate_num[i]){
            pictures[idx][1]++; 
            flag = true;
        }
    })
    if(pictures.length<n && !flag){
        pictures.push([candidate_num[i],0]);
    }
    else if(pictures.length === n && !flag){ //비어있는 사진틀이 없는 경우
        let minIdx = 0;
        let minNum = 1000;
        for(let j=0; j<n; j++){
            let temp = minNum;
            minNum = Math.min(pictures[j][1], minNum);

            if(temp !== minNum){
                minIdx = j;
            }
        }


        pictures.splice(minIdx,1);
        pictures.push([candidate_num[i],0]);  
        //사진틀에 게시된 사진이 삭제되는 경우에는 해당 학생이 추천받은 횟수는 0으로 바뀐다.

    }
    console.log(pictures);
}

pictures.sort((a,b)=>{
    return a[0] - b[0];
})
let answer=[];
pictures.map(v=> answer.push(v[0]));
console.log(answer.join(" "));




