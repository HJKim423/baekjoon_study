function solution(id_list, report, k) {
  let result = Array.from({ length: id_list.length }, () => 0);
  const set = new Set(report);
  const uniqueArr = [...set];

  let arr = [];
  for (let i = 0; i < uniqueArr.length; i++) {
    arr.push(uniqueArr[i].split(" "));
  }

  // let map = new Map();
  // for(let i=0; i<id_list.length; i++){
  //     map.set(id_list[i], 0)
  // }

  arr.sort((a, b) => a[1] - b[1]);

  let cnt = 1;
  let cntMembers = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1][1] === arr[i][1]) {
      cnt++;
    } else {
      cntMembers.push([arr[i - 1][1], cnt]);
      cnt = 1;
    }

    if (i === arr.length - 1) {
      cntMembers.push([arr[i][1], cnt]);
    }
  }
  cntMembers = cntMembers.filter(v => {
    return v[1] >= k;
  });

  console.log(result);

  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] === id_list[i]) {
        for (let i in cntMembers) {
          if (arr[j][1] === cntMembers[i][0]) {
            result[i]++;
          }
        }
      }
    }
  }
  return result;
}
