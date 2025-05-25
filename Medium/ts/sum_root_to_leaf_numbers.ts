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

function sumNumbers(root: TreeNode | null): number {
    let somma = 0,
        path  = ""
    const queue: [TreeNode, number][] = [[root!, 0]]

    while( queue.length > 0 ){
        const [actNode, level] = queue.shift()!
        path = `${path.slice(0, level)}${actNode?.val}`
        
        if ( !actNode?.left && !actNode?.right ) {
            somma += Number(path)
        } else {
            if ( actNode?.right ) queue.unshift([actNode.right, level+1])
            if ( actNode?.left ) queue.unshift([actNode.left, level+1])
        }
    }

    return somma
};

[4,9,0,5,1]
const sxsx = new TreeNode(5)
const sxdx = new TreeNode(1)
const sx = new TreeNode(9, sxsx, sxdx)
const dx = new TreeNode(0)
const root = new TreeNode(4, sx, dx)

console.log(sumNumbers(root))