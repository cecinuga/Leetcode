/**
 * @param {number} n
 * @return {string[]}
 */
function anticipatedVisit(tree, i) {
    if (i === void 0) { i = 0; }
    if (i > 0 && (i >= tree.length - 1 || i >= tree.length - 2))
        return tree[i] || "";
    var _a = [i * 2, i * 2 + 1], left = _a[0], right = _a[1];
    if (left == 0)
        left = 1;
    if (right == 1)
        right = 2;
    return "(".concat(anticipatedVisit(tree, left)).concat(anticipatedVisit(tree, right), ")");
}
function anticipatedVisits(trees) {
    var res = "";
    for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
        var tree = trees_1[_i];
        res += "".concat(anticipatedVisit(tree));
    }
    return res;
}
console.log(anticipatedVisits([["()", "()", "()"]]));
"(()())";
console.log(anticipatedVisits([["()", "()", undefined, "()"]]));
"((()))";
console.log(anticipatedVisits([["()"], ["()"], ["()"]]));
"()()()";
console.log(anticipatedVisits([["()", "()"], ["()"]]));
"(())()";
console.log(anticipatedVisits([["()"], ["()", "()"], ["()", undefined, "()", undefined, "()"]]));
"()(())";
var generateParenthesis = function (n) {
    var combs = [];
    var combsTrees = [[[]]];
    for (var _i = 0, combsTrees_1 = combsTrees; _i < combsTrees_1.length; _i++) {
        var trees = combsTrees_1[_i];
        combs.push(anticipatedVisits(trees));
    }
};
var n = 3;
var res = generateParenthesis(n);
console.log(res);
