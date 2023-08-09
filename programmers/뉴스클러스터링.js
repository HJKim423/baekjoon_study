function solution(str1, str2) {
  var answer = 0;
  let arr1 = makeArr(str1);
  let arr2 = makeArr(str2);

  let gop = getGop(arr1, arr2);
  let hap = arr1.length + arr2.length - gop;
  if (gop === 0 && hap === 0) return 65536;

  answer = parseInt((gop / hap) * 65536);
  return answer;
}

function makeArr(str) {
  let arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const strL = str[i].toUpperCase();
    const strR = str[i + 1].toUpperCase();
    if (strL >= "A" && strL <= "Z" && strR >= "A" && strR <= "Z") {
      arr.push(strL + strR);
    }
  }
  return arr;
}

//중복되는 요소가 전체 삭제되지않도록(요소 하나당 하나만 삭제되도록) splice(idx,1)
function getGop(arr1, arr2) {
  let arr = [];
  let arr2copy = [...arr2];

  arr1.forEach(v => {
    const idx = arr2copy.indexOf(v);
    if (idx > -1) {
      arr.push(v);
      arr2copy.splice(idx, 1);
    }
  });

  return arr.length;
}
