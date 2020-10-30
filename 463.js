/**
 * 463. 岛屿的周长
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。


输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16
 * @param {*} grid 
 */

var islandPerimeter = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        res += grid[i - 1] === undefined ? 1 : (grid[i-1][j] === 0 ? 1 : 0);
        res += grid[i][j - 1] === undefined ? 1 : (grid[i][j - 1] === 0 ? 1 : 0);
        res += grid[i + 1] === undefined ? 1 : (grid[i + 1][j] === 0 ? 1 : 0);
        res += grid[i][j + 1] === undefined ? 1 : (grid[i][j + 1] === 0 ? 1 : 0);
      }
    }
  }
  return res;
};

var arr = [
  [1,1]
];

console.log(islandPerimeter(arr));
