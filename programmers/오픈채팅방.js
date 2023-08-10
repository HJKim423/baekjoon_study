function solution(record) {
  var answer = [];

  let nameMap = new Map();
  for (let i = 0; i < record.length; i++) {
    const [action, id, name] = record[i].split(" ");
    if (action !== "Leave") {
      nameMap.set(id, name);
    }
  }

  for (let i = 0; i < record.length; i++) {
    const [action, id] = record[i].split(" ");
    if (action === "Enter") {
      answer.push(nameMap.get(id) + "님이 들어왔습니다.");
    } else if (action === "Leave") {
      answer.push(nameMap.get(id) + "님이 나갔습니다.");
    }
  }
  return answer;
}
