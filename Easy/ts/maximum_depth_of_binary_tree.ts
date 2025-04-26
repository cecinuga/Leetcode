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

function maxDepth(root: TreeNode | null): number {
    if ( root == null ) return 0
    if ( root.left == null && root.right == null ) return 1
    
    const dsx = maxDepth(root.left) + 1
    const ddx = maxDepth(root.right) + 1
    
    return Math.max(dsx, ddx)
};


[3,9,20,null,null,15,7]

const dxdx = new TreeNode(7)
const dxsx = new TreeNode(15)
const dx = new TreeNode(20, dxsx, dxdx)
const sx = new TreeNode(9, null)
const root = new TreeNode(3, sx, dx)

const res = maxDepth(root)
console.log(res)
//[2,null,3,null,4,null,5,null,6]