function solution(msg) {
  var answer = [];
  const words = [
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < msg.length; i++) {
    for (let j = msg.length; j >= i + 1; j--) {
      if (words.includes(msg.slice(i, j))) {
        answer.push(words.indexOf(msg.slice(i, j)));
        words.push(msg.slice(i, j + 1));
        if (j > i + 1) {
          i = j - 1;
        }
      }
    }
  }

  return answer;
}
