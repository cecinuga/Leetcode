/**
 * Definition for a binary tree node.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function maxTree(root) {
    var max = root.val;
    while (root.right != null) {
        max = root.right.val;
        root = root.right;
    }
    return max;
}
function minTree(root) {
    var min = root.val;
    while (root.left != null) {
        min = root.left.val;
        root = root.left;
    }
    return min;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    console.log(root);
    if (root.left == null && root.right == null)
        return true;
    if (root.left != null && root.right != null &&
        maxTree(root.left) < root.val && root.val < minTree(root.right))
        return isValidBST(root.left) && isValidBST(root.right);
    else if (root.right == null && root.left != null &&
        maxTree(root.left) < root.val)
        return isValidBST(root.left);
    else if (root.left == null && root.right != null &&
        root.val < minTree(root.right))
        return isValidBST(root.right);
    return false;
};
var left = new TreeNode(1);
var r1 = new TreeNode(3);
var r2 = new TreeNode(7);
var right = new TreeNode(4, r1, r2);
var root = new TreeNode(5, left, right);
console.log(isValidBST(root));
