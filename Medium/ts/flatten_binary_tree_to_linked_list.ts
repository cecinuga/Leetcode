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
 

function flatten(root: TreeNode | null): void {
    if ( !root  ) return 

    if (root.left) flatten(root.left)
    if (root.right) flatten(root.right)

    if ( !root.left )
        return 

    if ( !root.right ){
        root.right = root.left
        root.left = null
        return
    }

    let lastLeftNode: TreeNode = root.left;
    while(lastLeftNode.right !== null){
        lastLeftNode = lastLeftNode.right
    }

    lastLeftNode.right = root.right
    root.right = root?.left
    root.left = null
};
const dxsx = new TreeNode(4)
const dxdx = new TreeNode(6)
const sxsx = new TreeNode(4)
const sxdx = new TreeNode(5)
const dx = new TreeNode(3, dxsx, dxdx)
const sx = new TreeNode(2)
const root = new TreeNode(1, sx)

flatten(root)
console.dir(root)