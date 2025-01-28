class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function (head, val) {
    if ( head == null ) return null

    head.next = removeElements(head.next, val)

    if ( head.val == val ) return head.next
    return head
};
