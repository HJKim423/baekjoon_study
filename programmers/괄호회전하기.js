function solution(s) {
  var answer = 0;
  let arr = s.split("");
  if (isCorrectStr(arr)) answer++;

  for (let i = 1; i < s.length; i++) {
    let temp = arr.shift();
    arr.push(temp);
    if (isCorrectStr(arr)) answer++;
  }

  return answer;
}

function isCorrectStr(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && (arr[i] === "]" || arr[i] === ")" || arr[i] === "}")) {
      return false;
    }

    if (arr[i] === "[" || arr[i] === "(" || arr[i] === "{") {
      stack.push(arr[i]);
    } else if (arr[i] === "]" && stack.includes("[")) {
      stack.pop();
    } else if (arr[i] === ")" && stack.includes("(")) {
      stack.pop();
    } else if (arr[i] === "}" && stack.includes("{")) {
      stack.pop();
    }
  }
  if (stack.length > 0) return false;
  else {
    return true;
  }
}
