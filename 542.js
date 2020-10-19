let arr = [
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let res = new Array(matrix.length);
  for (let i = 0; i < matrix[0].length; i++) {
    res[i] = [];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let s = 1,
        up = i - 1,
        left = j - 1,
        right = j + 1,
        down = i + 1;
      if (matrix[i][j] === 0) {
        res[i][j] = 0;
      } else {
        let upnum = up > -1 ? matrix[up][j] : 1;
        let leftnum = left > -1 ? matrix[i][left] : 1;
        let rightnum = right < matrix[0].length ? matrix[i][right] : 1;
        let downnum = down < matrix.length ? matrix[down][j] : 1;
        while (
          upnum !== 0 &&
          leftnum !== 0 &&
          rightnum !== 0 &&
          downnum !== 0
        ) {
          s++;
          up--;
          down++;
          left--;
          right++;
          upnum = up > -1 ? matrix[up][j] : 1;
          leftnum = left > -1 ? matrix[i][left] : 1;
          rightnum = right < matrix[0].length ? matrix[i][right] : 1;
          downnum = down < matrix.length ? matrix[down][j] : 1;
        }
        res[i][j] = s;
      }
    }
  }
  return res;
};

console.log(updateMatrix(arr));
