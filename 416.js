/**
 * 416. 分割等和子集
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等
 *
 * 输入: [1, 5, 11, 5]
 * 输出: true
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 */

var canPartition = function (nums) {
  const sortNums = nums.sort((a, b) => a - b);
  const halfSum = getArrSum(sortNums) / 2;
  let sum = 0,
    res = false;
  for (let i = 0; i < sortNums.length; i++) {
    if (sum > halfSum) {
      res = false;
      break;
    } else if (sum === halfSum) {
      res = true;
      break;
    }
    sum += sortNums[i];
  }
  return res;
};

function getArrSum(arr) {
  return arr.reduce((pre, next) => pre + next, 0);
}

console.log(canPartition([1, 5, 11, 5]));
