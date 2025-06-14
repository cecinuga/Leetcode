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

export function generateTrees(n: number): Array<TreeNode | null> {    
    function generateTreesUtils(nodesNums: number=0, root: TreeNode=new TreeNode(), actNode: TreeNode=new TreeNode()){
        if ( nodesNums === 0 ){
            nodesNums++
            root.left = null
            root.right = null
            root.val = nodesNums
            actNode = root
        }

        if ( nodesNums === n ){
            trees.push(root)
            return 
        }

        if( nodesNums < n ){
            nodesNums++

            actNode.left = new TreeNode(nodesNums)
            generateTreesUtils(nodesNums+1, root, actNode.left)

            actNode.left = null

            actNode.right = new TreeNode(n-nodesNums)
            generateTreesUtils(n-nodesNums, root, actNode.right)
        }
    }

    const trees: (TreeNode | null)[] = []

    generateTreesUtils()

    return trees
};

const trees = generateTrees(3)
console.log(trees)

export function generateComb(n: number): number {
    if ( n === 0 ) return 1

    let sum = 0
    for ( let i = 0; i < n; i++ ){
        sum += generateComb(i)*generateComb((n-1)-i)
    }
    return sum
};

