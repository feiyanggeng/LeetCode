/**
 * 415. 字符串相加
 * 
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 */

var addStrings = function (num1, num2) {
  const str1 = num1.split("");
  const str2 = num2.split("");
  let res = [];
  let s = 0;
  while (str1.length > 0 || str2.length > 0) {
    const n1 = str1.length > 0 ? str1.pop() : 0;
    const n2 = str2.length > 0 ? str2.pop() : 0;
    const sum = parseInt(n1) + parseInt(n2) + s;
    res.unshift(sum % 10);
    s = parseInt(sum / 10);
  }
  if (s !== 0) {
    res.unshift(s);
  }
  return res.join("");
};

console.log(addStrings("99999999999999999999999999", "1"));
