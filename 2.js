/**
 * 两数相加
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

// 链表
function ListNode(val, next) {
  this.value = val;
  this.next = next || null
}

const listNode1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const listNode2 = new ListNode(5, new ListNode(6, new ListNode(4)));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let carry = 0, res = null, next = null;
    while (l1 || l2) {
        const add = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
        carry = parseInt(add / 10);
        const value = add % 10
        if (res) {
        next.next = new ListNode(value);
        next = next.next
        } else {
        res = new ListNode(value);
        next = res
        }
        l1 =l1 && l1.next;
        l2 =l2 && l2.next;
    }
    if (carry) {
        next.next = new ListNode(1)
    }

    return res;
}

console.log(addTwoNumbers(listNode1, listNode2));