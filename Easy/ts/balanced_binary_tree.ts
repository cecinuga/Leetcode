function isBalanced(root: TreeNode | null): boolean {
    // Helper function that returns the height of the tree if balanced,
    // or -1 if the subtree is unbalanced.
    function checkHeight(node: TreeNode | null): number {
        if (node === null) return 0;
        
        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // Left subtree unbalanced
        
        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Right subtree unbalanced
        
        if (Math.abs(leftHeight - rightHeight) > 1) return -1; // Current node unbalanced
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    return checkHeight(root) !== -1;
}