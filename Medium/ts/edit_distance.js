var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function printMatrix(M) {
    for (var i = 0; i < M.length; i++) {
        console.log(__spreadArray([], M[i], true));
    }
}
function minDistance(word1, word2) {
    var M = [];
    for (var i = 0; i <= word1.length; i++) {
        M.push([]);
        for (var j = 0; j <= word2.length; j++) {
            M[i].push(0);
            M[0][j] = j;
        }
        M[i][0] = i;
    }
    M[0][0] = 0;
    for (var i = 1; i <= word1.length; i++) {
        for (var j = 1; j <= word2.length; j++) {
            var localDistance = word1[i-1] == word2[j-1] ? 0 : 1;
            M[i][j] = Math.min(M[i][j - 1] + 1, M[i - 1][j] + 1, M[i - 1][j - 1] + localDistance);
        }
    }
    return M[M.length - 1][M[0].length - 1];
}
;
var word1 = "albero";
var word2 = "labbro";
var min = minDistance(word1, word2);
console.log(min);
