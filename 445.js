/**
 * 445. 两数相加 II
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * @param {*} val 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = {
  val: 7,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      },
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

var addTwoNumbers = function (l1, l2) {
  let stack1 = [],
    stack2 = [],
    res = [];
  let p = l1,
    q = l2,
    s = 0;
  while (p) {
    stack1.push(p.val);
    p = p.next;
  }
  while (q) {
    stack2.push(q.val);
    q = q.next;
  }
  while (stack1.length > 0 || stack2.length > 0) {
    let n1 = stack1.length > 0 ? stack1.pop() : 0;
    let n2 = stack2.length > 0 ? stack2.pop() : 0;
    let sum = n1 + n2 + s;
    res.unshift(new ListNode(sum % 10));
    s = parseInt(sum / 10);
  }
  if (s !== 0) {
    res.unshift(new ListNode(s));
  }
  for (let i = 0; i < res.length; i++) {
    res[i].next = res[i + 1] || null;
  }

  return res[0];
};

console.log(addTwoNumbers(l1, l2));
