var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
// TIENI TRACCIA DEL MINIMO A DEL MASSIMO PER CUI UN NODO PUÒ O NON PUÒ STARE IN UNA DETERMINATA POSIZIONE
// USA UNA VISITA ANTICIPATA PER CALCOLARE MINIMO E MASSIMO LOCALI PARTENDO DALLA RADICE
// APPENA TROVI UN NODO FUORI POSTO RITORNALO DALLA FUNZIONE VISITATRICE
// QUANDO ENTRAMBI I VALORI TI SONO RITORNATI SWAPPA LA PROP this.val
function maxTree(root) {
    if (root == null)
        return -Infinity;
    var max = root.val;
    while (root.right != null) {
        if (root.right.val > max)
            max = root.right.val;
        root = root.right;
    }
    return max;
}
function minTree(root) {
    if (root == null)
        return Infinity;
    var min = root.val;
    while (root.left != null) {
        if (root.left.val < min)
            min = root.left.val;
        root = root.left;
    }
    return min;
}
var getWrongNodes = function (root) {
    if (root.left == null && root.right == null)
        return null;
    var maxLeft = maxTree(root.left);
    var minRight = minTree(root.right);
    if (root.left != null && root.right != null && maxLeft < root.val && root.val < minRight) {
        var reLeft = getWrongNodes(root.left);
        return reLeft != null ? reLeft : getWrongNodes(root.right);
    }
    else if (root.right == null && root.left != null &&
        maxLeft < root.val)
        return getWrongNodes(root.left);
    else if (root.left == null && root.right != null &&
        root.val < minRight)
        return getWrongNodes(root.right);
    else if (maxLeft > root.val && minRight < root.val) {
        return [maxLeft, minRight];
    }
    else if (maxLeft > root.val) {
        return [root.val, maxLeft];
    }
    else if (minRight < root.val) {
        return [root.val, minRight];
    }
    return null;
};
function replaceNodes(root, x, y) {
    if (root.val == x) {
        var temp = root.val;
        root.val = y;
        x = temp;
    }
    else if (root.val == y) {
        var temp = root.val;
        root.val = x;
        y = temp;
    }
    root.left && replaceNodes(root.left, x, y);
    root.right && replaceNodes(root.right, x, y);
}
function recoverTree(root) {
    if (root == null)
        return;
    var res = getWrongNodes(root);
    if (res == null)
        return;
    var x = res[0], y = res[1];
    replaceNodes(root, x, y);
}
;
var r1 = new TreeNode(2);
var right = new TreeNode(1);
var root = new TreeNode(2, new TreeNode(3), right);
recoverTree(root);
