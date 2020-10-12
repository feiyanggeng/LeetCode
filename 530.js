/**
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function treeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
const treeNode1 = new treeNode(7);
const treeNode2 = new treeNode(4);
const tree = new treeNode(5);
tree.left = treeNode2;
tree.right = treeNode1;

const getMinimumDifference = (root) => {
  let diff = Number.MAX_SAFE_INTEGER;
  let preVal;

  const inOrder = (root) => {
    if (root == null) {
      return;
    }
    inOrder(root.left);
    if (preVal !== undefined && root.val - preVal < diff) {
      diff = root.val - preVal;
    }
    preVal = root.val;
    inOrder(root.right);
  };

  inOrder(root);
  return diff;
};

console.log(getMinimumDifference(tree));
