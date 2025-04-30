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

function levelOrderBottom(root: TreeNode | null): number[][] {
    if ( root == null ) return []
    if ( root.left == null && root.right == null ) return [[root.val]]

    const res: number[][] = []
    const Queue: [TreeNode, number][] = [[root, 0]]

    let actLevel: number = 0
    let actLevelArr: number[] = []

    while( Queue.length > 0 ){
        const [act, depth] = Queue.shift()

        if ( actLevel != depth ){
            res.unshift(actLevelArr)
            actLevelArr = []
            actLevel = depth
        }
        actLevelArr.push(act.val)

        if ( act.left != null ) Queue.push([act.left, depth+1])
        if ( act.right != null ) Queue.push([act.right, depth+1])
    }
    res.unshift(actLevelArr)

    return res
};

const sxdx = new TreeNode(5)
const sxsx = new TreeNode(4)
const dxdx = new TreeNode(7)
const dxsx = new TreeNode(15)
const dx = new TreeNode(3, dxsx, dxdx)
const sx = new TreeNode(2, sxsx, sxdx)
const root = new TreeNode(1, sx, dx)

const res = levelOrderBottom(root)

console.dir(res)