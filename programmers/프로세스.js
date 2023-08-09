function solution(priorities, location) {
  var answer = 0;
  let sortedPriorities = [...priorities].sort((a, b) => b - a);

  priorities = priorities.map((v, i) => {
    return [v, i];
  });

  while (priorities.length) {
    let [process, idx] = priorities.shift();
    let sortedProcess = sortedPriorities[0];

    if (process === sortedProcess) {
      answer++;
      sortedPriorities.shift();
      if (idx === location) break;
    } else {
      priorities.push([process, idx]);
    }
  }
  return answer;
}
