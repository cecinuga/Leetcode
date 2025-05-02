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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if ( root === null ) return null
    if ( root.left === null && root.right === null && root.val !== key ) return root

    if ( key > root.val ){
        root.right = deleteNode(root.right, key)
    } else if ( key < root.val ) {
        root.left = deleteNode(root.left, key)
    } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        
        let successor = root.right;
        while (successor.left !== null) {
            successor = successor.left;
        }
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
        return root;
    }

    return root
};


const sxdxdx = new TreeNode(3.5)
const sxdxsx = new TreeNode(-10)
const sxdx = new TreeNode(4)
const sxsx = new TreeNode(2)
const dxdx = new TreeNode(7)
const dxsx = new TreeNode()
const dx = new TreeNode(6, null, dxdx)
const sx = new TreeNode(3, sxsx, sxdx)
const root = new TreeNode(5, sx, dx)

const key = 3
const newRoot = deleteNode(root, key)

console.dir(newRoot)
