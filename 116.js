/**
 * 116. 填充每个节点的下一个右侧节点指针
 * 
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 */

const root = {
  $id: "1",
  left: {
    $id: "2",
    left: {
      $id: "3",
      left: null,
      next: null,
      right: null,
      val: 4,
    },
    next: null,
    right: {
      $id: "4",
      left: null,
      next: null,
      right: null,
      val: 5,
    },
    val: 2,
  },
  next: null,
  right: {
    $id: "5",
    left: {
      $id: "6",
      left: null,
      next: null,
      right: null,
      val: 6,
    },
    next: null,
    right: {
      $id: "7",
      left: null,
      next: null,
      right: null,
      val: 7,
    },
    val: 3,
  },
  val: 1,
};

var connect = function (root) {
  if (root === null) return null;
  const Q = [root];
  while (Q.length > 0) {
    const size = Q.length;
    for (let i = 0; i < size; i++) {
      const node = Q.shift();
      if (i !== size - 1) {
        node.next = Q[0];
      }
      if (node.left) {
        Q.push(node.left);
      }
      if (node.right) {
        Q.push(node.right);
      }
    }
  }
  return root;
};
