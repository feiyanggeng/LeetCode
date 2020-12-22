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
