/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k < 1) return head;
    
    let tail = head;
    let dummyHead = head;
    let current = head;
    let linkedListLength = 1;
    
    // Get length of linked list
    while (tail.next) {
        tail = tail.next;
        linkedListLength++;
    }
    
    // Reduce the number of rotations to be made
    k = k % linkedListLength;
    
    if (k === 0) return head;
    
    for (let i = linkedListLength - k - 1; i > 0; i--) {
        current = current.next;
    }
    
    tail.next = dummyHead;
    dummyHead = current.next;
    current.next = null;
    
    return dummyHead;
};