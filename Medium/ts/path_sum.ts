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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if ( root == null ) return false
    if ( root.left == null && root.right == null && targetSum - root.val == 0 ) return true

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum( root.right, targetSum - root.val )
};

const sxdx = new TreeNode(5)
const sxsx = new TreeNode(4)
const dxdx = new TreeNode(7)
const dxsx = new TreeNode(15)
const dx = new TreeNode(3, dxsx, dxdx)
const sx = new TreeNode(2, sxsx, sxdx)
const root = new TreeNode(1, sx, dx)

const res = hasPathSum(root, 7)

console.dir(res)