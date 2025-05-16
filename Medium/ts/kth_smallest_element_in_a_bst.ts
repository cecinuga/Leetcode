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



function kthSmallest(root: TreeNode | null, k: number): number {
    if ( root.left == null && root.right == null ) return root.val

    function krec(root: TreeNode, arr: number[], k: number){
        if (root.left != null) krec(root.left, arr, k)
        arr.push(root.val)
        if ( arr.length === k ) return arr[k-1]
        if (root.right != null) krec(root.right, arr, k)

        return arr[k-1]
    }    

    return krec(root, [], k)
};

const sxdx = new TreeNode(2)
const dx = new TreeNode(4)
const sx = new TreeNode(1, null, sxdx)
const root = new TreeNode(3, sx, dx)

kthSmallest(root, 2)