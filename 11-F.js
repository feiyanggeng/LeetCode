const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let max = 0
  const sortHeights = height.sort((a, b) => b - a)
  for (let i = 1; i < sortHeights.length; i++) {
    const curMax = 
  }
};

maxArea(heights)