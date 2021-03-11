/**
 * 基本计算器 II
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

  整数除法仅保留整数部分。
*/

var calculate = function (s) {
  let ops = [], i = 0;
  let res = 0,
    n = s.length,
    sign = "+",
    num = 0;
  for (let i = 0; i < n; i++) {
    if (i < n && !isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (sign) {
        case "+":
          ops.push(num);
          break;
        case "-":
          ops.push(-num);
          break;
        case "*":
          ops.push(ops.pop() * num);
          break;
        case "/":
          ops.push(parseInt(ops.pop() / num));
          break;
        default:
          ops.push(num);
          break;
      }
      sign = s[i];
      num = 0;
    }
   
  }
  while (ops.length) {
    res += ops.pop();
  }
  
  return res;
};


console.log(calculate("-1+ 2*2 +1+ 2*1"));



/**
 * 解题思路
 * 1. + - * / 运算符具有优先级，没有（）
 * 2. 利用栈保存中间结果
 * 3. + - 统一为相加运算，- 保存为负数 
 * 
 * 遇见 + - 就将数字存入 ops 中，遇见 * / 就将 ops 中最顶的拿出来计算后重新推进栈中 
 * 最后将栈中的数字进行相加运算
 */