function generate(numRows) {
    var res = [[1]];
    for (var row = 1; row < numRows; row++) {
        res.push([]);
        for (var col = 0; col <= row; col++) {
            var aboveLeft = col < res[row - 1].length ? res[row - 1][col] : 0;
            var aboveRight = col - 1 >= 0 ? res[row - 1][col - 1] : 0;
            res[row][col] = aboveLeft + aboveRight;
        }
    }
    return res;
}
;
var numRows = 5;
var pascalTriangle = generate(numRows);
console.log(pascalTriangle);
