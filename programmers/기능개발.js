function solution(progresses, speeds) {
  var answer = [];
  let lastDays = [];

  progresses.forEach((v, i) => {
    lastDays.push(Math.ceil((100 - v) / speeds[i]));
  });
  lastDays.push(101);

  for (let i = 0; i <= progresses.length; i++) {
    let num = 1;

    for (let j = i + 1; j <= progresses.length; j++) {
      if (lastDays[i] < lastDays[j]) {
        answer.push(num);
        i = j - 1;
        break;
      } else num++;
    }
  }
  return answer;
}
