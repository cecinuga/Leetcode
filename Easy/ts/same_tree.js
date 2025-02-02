var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function isSameTree(p, q) {
    console.log(p, q);
    console.log('---------------------');
    if ((p === null || p === void 0 ? void 0 : p.val) != (q === null || q === void 0 ? void 0 : q.val))
        return false;
    else if ((p == null || q == null) && p != q)
        return false;
    else if ((p === null || p === void 0 ? void 0 : p.val) == null)
        return true;
    return isSameTree(p === null || p === void 0 ? void 0 : p.left, (q === null || q === void 0 ? void 0 : q.left) || null) && isSameTree(p === null || p === void 0 ? void 0 : p.right, (q === null || q === void 0 ? void 0 : q.right) || null);
}
;
var sx = new TreeNode(5);
var dx = new TreeNode(15);
var root = new TreeNode(10, sx, dx);
var sx22 = new TreeNode(15);
var sx2 = new TreeNode(5, sx22);
var root2 = new TreeNode(10, sx2);
console.log(isSameTree(root, root2));
