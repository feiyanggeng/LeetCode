/**
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
如果链表中存在环，则返回 true 。 否则，返回 false 。
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node3 = new ListNode(4);
const node2 = new ListNode(3);
const node1 = new ListNode(0);
const head = new ListNode(1);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1;

var hasCycle = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

console.log(hasCycle(head));
