function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  if (cacheSize === 0) answer = cities.length * 5;
  else {
    while (cities.length) {
      let city = cities.shift().toUpperCase();
      if (cache.includes(city)) {
        answer += 1;
        cache.splice(cache.indexOf(city), 1);
        cache.push(city);
      } else {
        if (cache.length === cacheSize) {
          cache.shift();
        }
        answer += 5;
        cache.push(city);
      }
    }
  }

  return answer;
}
