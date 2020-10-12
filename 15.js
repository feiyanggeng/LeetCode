/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

var threeSum = function (nums) {
  let res = [];
  let sortNums = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sortNums.length - 2; i++) {
    for (let j = i + 1; j < sortNums.length - 1; j++) {
      for (let k = j + 1; k < sortNums.length; k++) {
        if (sortNums[i] + sortNums[j] + sortNums[k] === 0) {
          res.push([sortNums[i], sortNums[j], sortNums[k]]);
        }
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
