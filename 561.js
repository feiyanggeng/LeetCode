/**
 * 561. 数组拆分 I
给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
 */
var arrayPairSum = function (nums) {
  let res = 0;
  const sortNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortNums.length; i += 2) {
    res += sortNums[i];
  }
  return res;
};