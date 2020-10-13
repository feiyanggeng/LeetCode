/**
 * 合并两个有序数组
 * 输入：
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  输出：[1,2,2,3,5,6]
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index = 0;
  while (nums2[0]) {
    let n2 = nums2.shift();
    for (let i = index; i < m + n; i++) {
      if (n2 >= nums1[i] && n2 < nums1[i + 1]) {
        nums1.splice(i + 1, 0, n2);
        nums1.pop();
        index = i;
        break;
      } else if (nums1[i] === 0 || (i === 0 && n2 < nums1[i])) {
        nums1.splice(i, 0, n2);
        nums1.pop();
        index = i;
        break;
      }
    }
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];

merge(nums1, 3, [2, 5, 6], 3);

console.log(nums1);
