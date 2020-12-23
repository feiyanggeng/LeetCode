/**
 * 
 * @param {给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。}
 * 
 * s = "leetcode"
返回 0

s = "loveleetcode"
返回 2 
 */

var firstUniqChar = function (s) {
  let resKey = undefined;
  let map = s.split("").reduce((prev, next) => {
    if (prev[next]) {
      prev[next]++;
    } else {
      prev[next] = 1;
    }
    return prev;
  }, {});
  for (let key in map) {
    if (map[key] === 1) {
      resKey = key;
      break
    }
  }
  return s.indexOf(resKey);
};

console.log(firstUniqChar("loveleetcode"));


