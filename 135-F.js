
// const input = [29, 51, 87, 87, 72, 12];
const input = [1, 3, 2, 2, 1];
// const input = [1, 2, 3, 1, 0];
// const input = [5, 4, 3, 2, 1, 0];

var candy = function (ratings) { 
  const n = ratings.length;
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }

  let right = 0,
    ret = 0;
  for (let i = n - 1; i > -1; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    ret += Math.max(left[i], right);
  }
  return ret;
};

console.log(candy(input));