/**
 * 
 * 长度最小子数组
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。


解法滑动窗口（双指针）
 */
const t = 7,
  n = [2, 3, 1, 2, 4, 3];

var minSubArrayLen = function (target, nums) {
  let i = 0, j = 0, count = 0, curLength=Infinity
  while (j < nums.length) {
    count += nums[j];
    while (count >= target) {
      curLength = Math.min(curLength, j - i + 1)
      count -= nums[i];
      i++;
    }
    j++
  }
   return curLength === Infinity ? 0 : curLength;
};

console.log(minSubArrayLen(t, n));