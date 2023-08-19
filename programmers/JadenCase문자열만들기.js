function solution(s) {
  var answer = "";
  const temp = s
    .toLowerCase()
    .split(" ")
    .map(v => {
      return v.split("");
    });

  const res = temp.map(v => {
    let word = "";
    for (let i = 0; i < v.length; i++) {
      if (i === 0) word += v[i].toUpperCase();
      else word += v[i];
    }
    return word;
  });
  answer = res.join(" ");
  return answer;
}
