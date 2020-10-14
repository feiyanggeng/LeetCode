/**
 * 1002. 查找常用字符
  给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
  输入：["bella","label","roller"]
  输出：["e","l","l"]

  输入：["cool","lock","cook"]
  输出：["c","o"]
 */

const arr = ["bella", "label", "roller"];
const arr1 = [
  "bbddabab",
  "cbcddbdd",
  "bbcadcab",
  "dabcacad",
  "cddcacbc",
  "ccbdbcba",
  "cbddaccc",
  "accdcdbb",
];

var commonChars = function (A) {
  let res = [];
  let baseStr = A[0];
  for (let i = 0; i < baseStr.length; i++) {
    let isAll = true;
    for (let j = 1; j < A.length; j++) {
      let index = A[j].indexOf(baseStr[i]);
      if (index === -1) {
        isAll = false;
      } else {
        A[j] = A[j].replace(new RegExp(baseStr[i]), "");
      }
    }
    if (isAll) {
      res.push(baseStr[i]);
    }
  }
  return res;
};

console.log(commonChars(arr1));
