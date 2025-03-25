class TreeNodeV1 {
    val: number
    left: TreeNodeV1 | null
    right: TreeNodeV1 | null
    constructor(val?: number, left?: TreeNodeV1 | null, right?: TreeNodeV1 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSameTree(p: TreeNodeV1 | null, q: TreeNodeV1 | null): boolean {
    if( p?.val != q?.val ) return false
    else if ( (p == null || q == null) && p != q ) return false
    else if ( p?.val == null ) return true

    return isSameTree(p?.left, q?.left||null) && isSameTree(p?.right, q?.right||null)
};

let sx = new TreeNodeV1(5)
let dx = new TreeNodeV1(15)
let root = new TreeNodeV1(10, sx, dx)

let sx22 = new TreeNodeV1(15)
let sx2 = new TreeNodeV1(5, sx22)
let root2 = new TreeNodeV1(10, sx2)

console.log(isSameTree(root, root2))