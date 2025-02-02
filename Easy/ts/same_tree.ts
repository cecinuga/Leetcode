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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if( p?.val != q?.val ) return false
    else if ( (p == null || q == null) && p != q ) return false
    else if ( p?.val == null ) return true

    return isSameTree(p?.left, q?.left||null) && isSameTree(p?.right, q?.right||null)
};

let sx = new TreeNode(5)
let dx = new TreeNode(15)
let root = new TreeNode(10, sx, dx)

let sx22 = new TreeNode(15)
let sx2 = new TreeNode(5, sx22)
let root2 = new TreeNode(10, sx2)

console.log(isSameTree(root, root2))