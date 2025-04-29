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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if ( root == null ) return []
    if ( root.left == null && root.right == null ) return [[root.val]]

    const res: number[][] = []
    const Queue: [TreeNode, number][] = [[root, 0]]

    while (Queue.length > 0) {
        const [node, level] = Queue.shift()!;
        if (res[level] === undefined) res[level] = [];
        
        if (level % 2 === 0)  res[level].push(node.val);
        else res[level].unshift(node.val);
        
        
        if (node.left !== null) Queue.push([node.left, level + 1]);
        if (node.right !== null) Queue.push([node.right, level + 1]);
    }

    return res
};

[3,9,20,null,null,15,7]

const sxdx = new TreeNode(5)
const sxsx = new TreeNode(4)
const dxdx = new TreeNode(7)
const dxsx = new TreeNode(15)
const dx = new TreeNode(3, dxsx, dxdx)
const sx = new TreeNode(2, sxsx, sxdx)
const root = new TreeNode(1, sx, dx)

const res = zigzagLevelOrder(root)

console.dir(res)