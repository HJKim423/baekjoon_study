function solution(fees, records) {
  var answer = [];
  const [base_time, base_rate, unit_time, unit_rate] = [...fees];
  let rates = new Map();

  while (records.length) {
    let flag = false;
    if (records.length === 1) {
      rates.set(
        records[0].split(" ")[1],
        (rates.get(records[0].split(" ")[1]) || 0) +
          calc_time("23:59", records[0].split(" ")[0])
      );
    }

    const [in_time, in_num, in_state] = records.shift().split(" ");
    for (let j = 0; j < records.length; j++) {
      const [out_time, out_num, out] = records[j].split(" ");

      if (in_num === out_num) {
        rates.set(
          in_num,
          (rates.get(in_num) || 0) + calc_time(out_time, in_time)
        );
        records.splice(j, 1);
        flag = true;
        break;
      }
      if (j >= records.length - 1 && !flag) {
        rates.set(
          in_num,
          (rates.get(in_num) || 0) + calc_time("23:59", in_time)
        );
        break;
      }
    }
  }

  const ratesArr = [...rates].sort((a, b) => a[0] - b[0]);
  ratesArr.map(v => {
    if (v[1] <= base_time) answer.push(base_rate);
    else
      answer.push(
        base_rate + Math.ceil((v[1] - base_time) / unit_time) * unit_rate
      );
  });

  return answer;
}

function calc_time(out_time, in_time) {
  return (
    Number(out_time.split(":")[0]) * 60 +
    Number(out_time.split(":")[1]) -
    (Number(in_time.split(":")[0]) * 60 + Number(in_time.split(":")[1]))
  );
}
