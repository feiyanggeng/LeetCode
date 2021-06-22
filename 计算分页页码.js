/**
 * 总页码小于 length
 * 总页码大于 length 
 * current < 5 centerPage = 3 前后 2 个
 * current > total - 5 centerPage = total - 2 前后两个
 * 5 <= current <= total-5 centerPage = current 前后一个
 * 
 * 计算分页展示的页码
 * @param {number} total 总页数
 * @param {number} current 当前页码
 * @param {number} length 分页器长度
 */
const getPages = (total, current, length) => {
  let pages = [];
  if (total < length) {
    for (let i = 1; i < total; i += 1) {
      pages.push(i)
    }
  } else {
    if (current < 5) {
      for (let i = 1; i <= 5; i += 1) {
        pages.push(i)
      }
      pages.push('...');
      pages.push(total)
    } else if (current > total - 5) {
      pages.push(1);
      pages.push("...");
      for (let i = total - 4; i <= total; i += 1) {
        pages.push(i);
      }
    } else {
      const interval = Math.floor((length - 4) / 2);
      pages.push(1);
      pages.push("...");
      for (
        let i = current - interval;
        i <= current + interval;
        i += 1
      ) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    }
  }
  return pages
}

console.log(1, getPages(10, 1, 7));
console.log(2, getPages(10, 2, 7));
console.log(3, getPages(10, 3, 7));
console.log(4, getPages(10, 4, 7));
console.log(5, getPages(10, 5, 7));
console.log(6, getPages(10, 6, 7));
console.log(7, getPages(10, 7, 7));
console.log(8, getPages(10, 8, 7));
console.log(9, getPages(10, 9, 7));