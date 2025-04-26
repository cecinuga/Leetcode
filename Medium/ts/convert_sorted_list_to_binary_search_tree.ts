class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedListToSortedArray(head: ListNode | null): number[]{
    const res = []

    let curr = head
    do {
        res.push(curr.val)
        curr = curr.next
    } while ( curr != null )

    return res
}

function sortedArrayToBSTRec(arr: number[]) : TreeNode{
    if ( arr.length == 0 ) return null
    if ( arr.length == 1 ) return new TreeNode(arr[0])

    const localHalf = Math.floor(arr.length/2)
    
    const left = sortedArrayToBSTRec(arr.slice(0, localHalf))
    const right = sortedArrayToBSTRec(arr.slice(localHalf+1))
    const root = new TreeNode(arr[localHalf], left, right)

    return root
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if ( head == null ) return null
    if ( head.next == null ) return new TreeNode(head.val)
    
    const sortedArr = sortedListToSortedArray(head)
    const root = sortedArrayToBSTRec(sortedArr)
    
    return root
};

[-10,-3,0,5,9]

const next4 = new ListNode(9, null)
const next3 = new ListNode(5, next4)
const next2 = new ListNode(0, next3)
const next1 = new ListNode(-3, next2)
const head = new ListNode(-10, next1)

const BST = sortedListToBST(head)

console.dir(BST)