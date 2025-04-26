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

function minDepth(root: TreeNode | null): number {
    if ( root == null ) return 0
    if ( root.left == null && root.right == null ) return 1
 
    const dsx = minDepth(root.left) + (root.left == null ? 0: 1)
    const ddx = minDepth(root.right) + (root.right == null ? 0: 1)

    if ( dsx == 0 ) return ddx
    else if ( ddx == 0 ) return dsx
    
    return Math.min(dsx, ddx);
};


[3,9,20,null,null,15,7]

const dxsx = new TreeNode(15)
const sx = new TreeNode(9, null, dxsx)
const dxdx = new TreeNode(7, null, sx)
const dx = new TreeNode(20, null, dxdx)
const root = new TreeNode(3, null, dx)

const res = minDepth(root)
console.log(res)
//[2,null,3,null,4,null,5,null,6]