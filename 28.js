/**
 * 实现一个 strStr() 函数，
 * 找到目标字符串在源字符串中出现的第一个位置
 */

function strStr(haystack, needle) {
  let nLen = needle.length,
    leng = haystack.length - nLen;
  for (let i = 0; i <= leng; i++) {
    if (haystack.substr(i, nLen) === needle) {
      return i
    }
  }
  return -1
}

console.log(strStr("hello", "lo"));