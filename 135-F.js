
const input = [29, 51, 87, 87, 72, 12];
// const input = [1, 3, 2, 2, 1];
// const input = [1, 2, 3, 1, 0];

var candy = function (ratings) { 
  let curMaxIndex = -1, candys = new Array(ratings.length).fill(1)
  for (let i = 0; i < ratings.length; i++) {
    const prev = typeof ratings[i - 1] === "number" ? ratings[i - 1] : Infinity;
    const next = typeof ratings[i + 1] === "number" ? ratings[i + 1] : Infinity;
    if (ratings[i] > prev) {
      candys[i] = (candys[i - 1] || 0) + 1;
    } else if (ratings[i] > next) {
      candys[i]++;
    }
    if (ratings[i] > next) {
      candys[curMaxIndex] &&
        candys[curMaxIndex] < candys[i] &&
        candys[curMaxIndex]++;
      curMaxIndex = i;
    } else {
      curMaxIndex = -1;
    }
    console.log(candys);
  }
  console.log(candys);
  return candys.reduce((prev, next) => prev + next, 0 )
};

console.log(candy(input));