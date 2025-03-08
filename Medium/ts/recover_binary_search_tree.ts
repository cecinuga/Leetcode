function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = new TreeNode(-Infinity);

    function inorder(node: TreeNode | null) {
        if (!node) return;
        inorder(node.left);
        // If current node's value is less than previous node's value, it's a violation.
        if (prev && node.val < prev.val) {
            // On first encounter, mark prev as first.
            if (!first) first = prev;
            // On subsequent encounters (or first encounter as well), mark current node as second.
            second = node;
        }
        prev = node;
        inorder(node.right);
    }

    inorder(root);

    // Swap the values of the two nodes to recover the BST.
    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}
