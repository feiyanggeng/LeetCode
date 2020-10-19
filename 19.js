/**
 * 19. 删除链表的倒数第N个节点
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

var removeNthFromEnd = function (head, n) {
  let list = [],
    node = head;
  while (node) {
    list.push(node);
    node = node.next;
  }
  if (n === list.length) {
    return list[1] || null;
  }
  list[list.length - n - 1].next = list[list.length - n].next;
  return head;
};

console.dir(removeNthFromEnd(head, 2).next.next);
