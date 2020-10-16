/**
 *989. 数组形式的整数加法
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。


输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
 *
 * 解法类似  415.js
 */
var addToArrayForm = function (A, K) {
  const Ks = K.toString().split("");
  let res = [];
  let s = 0;
  while (A.length > 0 || Ks.length > 0) {
    const n1 = A.length > 0 ? A.pop() : 0;
    const n2 = Ks.length > 0 ? Ks.pop() : 0;
    const sum = parseInt(n1) + parseInt(n2) + s;
    res.unshift(sum % 10);
    s = parseInt(sum / 10);
  }
  if (s !== 0) {
    res.unshift(s);
  }
  return res;
};
