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

function BFS(root:TreeNode | null, res: [number, number][]=[], l:number=0): [number, number][] {
    res.push([root.val, l])
    
    if ( root.left != null ) res = BFS(root.left, res, l+1)
    if ( root.right != null ) res = BFS(root.right, res, l+1)

    return res
}

function levelOrder(root: TreeNode | null): number[][] {
   if ( root == null ) return []
   if ( root.left == null && root.right == null ) return [[root.val]]

   const flattedRes = BFS(root)
   const res: number[][] = []

   for ( let i = 0; i < flattedRes.length; i++ ){
    if ( res[flattedRes[i][1]] == undefined ) res[flattedRes[i][1]] = new Array<number>(0)
    res[flattedRes[i][1]].push(flattedRes[i][0])
   }

   return res
};

const sxsx = new TreeNode(4)
const sxdx = new TreeNode(5)
const sx = new TreeNode(2, sxsx, sxdx)
const dx = new TreeNode(3)
const root = new TreeNode(1, sx, dx)


const res = levelOrder(root)