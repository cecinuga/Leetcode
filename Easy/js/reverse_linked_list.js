class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextNode = curr.next; 
        curr.next = prev; 
        prev = curr; 
        curr = nextNode; 
    }
    return prev;
};

let c = new ListNode(val=4)
let b = new ListNode(val=2, next=c)
let a = new ListNode(val=1, next=b)

console.log(reverseList(a))