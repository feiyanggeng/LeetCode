/**
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

 * @param {string} s 
 * @returns 
 */

var numDecodings = function (s) {
  if (s.indexOf("0") !== -1) return 0;
  let i = 0,
    curNum = 0,
    nextNum = 0;
  s = s.split("");
  while (i < s.length - 1 && s.length > 1) {
    const cur = parseInt(s.slice(i, i + 2).join(""));
    const next =
      i > s.length - 3 ? 0 : parseInt(s.slice(i + 1, i + 3).join(""));
    if (cur >= 1 && cur <= 26) curNum++;
    if (next >= 1 && next <= 26) nextNum++;
    i += 2;
  }
  console.log(curNum, nextNum);
  return 1 + (Math.pow(2, curNum) - 1) + (Math.pow(2, nextNum) - 1);
};

console.log(numDecodings("226123213"));
