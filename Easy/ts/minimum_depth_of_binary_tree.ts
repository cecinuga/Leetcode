function minDepth(root: TreeNode | null): number {
    if ( root == null ) return 0
    if ( root.left == null && root.right == null ) return 1
 
    const dsx = minDepth(root.left) + (root.left == null ? 0: 1)
    const ddx = minDepth(root.right) + (root.right == null ? 0: 1)

    if ( dsx == 0 ) return ddx
    else if ( ddx == 0 ) return dsx
    
    return Math.min(dsx, ddx);
};