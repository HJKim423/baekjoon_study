function solution(survey, choices) {
  var answer = "";
  let mbti = new Map();
  let arr = [];
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] === 1) {
      mbti.set(survey[i][0], (mbti.get(survey[i][0]) || 0) + 3);
    } else if (choices[i] === 2) {
      mbti.set(survey[i][0], (mbti.get(survey[i][0]) || 0) + 2);
    } else if (choices[i] === 3) {
      mbti.set(survey[i][0], (mbti.get(survey[i][0]) || 0) + 1);
    } else if (choices[i] === 5) {
      mbti.set(survey[i][1], (mbti.get(survey[i][1]) || 0) + 1);
    } else if (choices[i] === 6) {
      mbti.set(survey[i][1], (mbti.get(survey[i][1]) || 0) + 2);
    } else if (choices[i] === 7) {
      mbti.set(survey[i][1], (mbti.get(survey[i][1]) || 0) + 3);
    }
  }
  let first = "R";
  let second = "C";
  let third = "J";
  let fourth = "A";

  if ((mbti.get("R") ?? 0) < (mbti.get("T") ?? 0)) first = "T";
  if ((mbti.get("C") ?? 0) < (mbti.get("F") ?? 0)) second = "F";
  if ((mbti.get("J") ?? 0) < (mbti.get("M") ?? 0)) third = "M";
  if ((mbti.get("A") ?? 0) < (mbti.get("N") ?? 0)) fourth = "N";

  answer = first + second + third + fourth;
  return answer;
}
