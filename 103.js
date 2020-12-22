/**
 * 
 * 二叉树的锯齿形层序遍历
 * 
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

output: [
  [3],
  [20,9],
  [15,7]
]
 */

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
  },
  right: {
    val: 3,
    right: {
      val: 5,
    },
  },
};

var zigzagLevelOrder = function (root) {
  console.log(root);
  let res = [],
    curLevel = root ? [root] : [], // 存储每一行的节点
    isLeft = false;
  while (curLevel.length) {
    let curLevelsValue = [],
      nextLevel = [];
    for (let i = 0; i < curLevel.length; i++) {
      curLevelsValue.push(curLevel[i].val);
      curLevel[i].left && nextLevel.push(curLevel[i].left);
      curLevel[i].right && nextLevel.push(curLevel[i].right);
    }
    curLevelsValue = isLeft ? curLevelsValue.reverse() : curLevelsValue;
    console.log(curLevelsValue);
    res.push(curLevelsValue);
    curLevel = nextLevel;
    isLeft = !isLeft;
  }
  return res;
};

console.log(zigzagLevelOrder(tree));

