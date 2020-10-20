/**
 * 
 * 143. 重排链表
给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:

给定链表 1->2->3->4, 重新排列为 1->4->2->3.
示例 2:

给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

var reorderList = function (head) {
  if (!head || !head.next) return head;
  let slow = head,
    quick = head.next;
  while (slow.next && quick && quick.next) {
    slow = slow.next;
    quick = quick.next;
    quick = quick ? quick.next : null;
  }
  let right = reserveList(slow.next);
  slow.next = null;
  let cur = head;
  while (right) {
    let temp = cur ? cur.next : null;
    let next = right.next;
    cur.next = right;
    cur.next.next = temp;
    right = next;
    cur = temp;
  }
};

// 翻转链表
function reserveList(head) {
  let pre = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}

reorderList(head);

console.log(head);
