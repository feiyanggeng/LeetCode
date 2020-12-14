/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 */

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strs) { 
  let result = [], map = {}
  strs.forEach((item) => {
    let key = item.split('').sort().join('')
    if (map[key]) {
      map[key].push(item)
    } else {
      map[key] = [item]
    }
  })
  for (let key in map) {
    result.push(map[key])
  }
  return result
};

console.log(groupAnagrams(input));
