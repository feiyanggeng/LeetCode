/**
 * 977. 有序数组的平方
 * 输入：[-7,-3,2,3,11]
  输出：[4,9,9,49,121]
 */

var sortedSquares = function (A) {
  return A.map((item) => item * item).sort((a, b) => a - b);
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
