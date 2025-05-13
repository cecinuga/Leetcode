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

function preorderTraversal(root: TreeNode | null): number[] {
  if ( root === null ) return []
  
  const res: number[] = []
  const queue: TreeNode[] = [root]
  
  let node: TreeNode;
  while( queue.length > 0 ){
    node = queue.pop()

    res.push(node.val)

    if ( node.left !== null ) queue.unshift(node.left)
    if ( node.right !== null ) queue.unshift(node.right)
   
  }
  
  return res
};

const dxdx = new TreeNode(7)
const dxsx = new TreeNode(6)
const sxdx = new TreeNode(5)
const sxsx = new TreeNode(4)
const dx = new TreeNode(3, dxsx, dxdx)
const sx = new TreeNode(2, sxsx, sxdx)
const root = new TreeNode(1, sx, dx)

const res = preorderTraversal(root)