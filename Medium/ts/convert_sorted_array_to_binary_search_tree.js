var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var sxSon = function (i) { return i * 2 + 1; };
var dxSon = function (i) { return i * 2 + 2; };
function makeAbr(arr) {
    var root = new TreeNode(arr[Math.floor(arr.length / 2)]);
    function recMakeAbr(arr, node, i, stop) {
        if (i === void 0) { i = 0; }
        if (stop === void 0) { stop = -1; }
        if (stop == -1)
            stop = Math.floor(arr.length / 2);
        if (arr.length == 0)
            return;
        var middle = Math.floor(arr.length / 2);
        var sx = arr.slice(0, middle);
        var dx = arr.slice(middle + 1);
        var middleSx = Math.floor(sx.length / 2);
        var middleDx = Math.floor(dx.length / 2);
        if (sx.length > 0) {
            node.left = new TreeNode(sx[middleSx]);
            recMakeAbr(sx, node.left, sxSon(i), stop);
        }
        if (dx.length > 0) {
            node.right = new TreeNode(dx[middleDx]);
            recMakeAbr(dx, node.right, dxSon(i), stop);
        }
    }
    recMakeAbr(arr, root);
    return root;
}
var input = [-10, -3, 0, 5, 9];
var root = makeAbr(input);
console.log(root);
