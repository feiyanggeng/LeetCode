var largestNumber = function (nums) {
  let res = "";
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i].toString(),
      str1 = res + cur,
      str2 = cur + res;
    let j = 0;
    res = str1;
    while (j < str1.length) {
      if (parseInt(str1[j]) === parseInt(str2[j])) {
        j++
      } else {
        res = parseInt(str1[j]) > parseInt(str2[j]) ? str1 : str2;
        break;
      }
    }
  }
  return res;
};

const input = [432, 43243];

console.log(largestNumber(input));