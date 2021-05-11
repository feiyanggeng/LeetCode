/**
 * 中序输出
 * @param {TreeNode} root
 * @return {number[]}
 */
const tree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}

var inorderTraversal = function (root) {
  let res = []
  function fun(node) {
    if (!node) return;
    fun(node.left)
    res.push(node)
    fun(node.right)
  }
  fun(root)
  return res.map((item) => item.val)
};

console.log(inorderTraversal(tree));


var inorderTraversal2 = function (root) {
  let stack = [];
  let res = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    let l = stack.pop();
    res.push(l.val);
    root = l.right
  }
  return res
};
console.log(inorderTraversal2(tree));
