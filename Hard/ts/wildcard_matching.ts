function validPath(M:number[][], s:string, p: string) {
    var i = M.length-1, j = M[0].length-1;
    if ( M[i][j] != 0 ) return false
    let solution = s[j-1]
    while (i > 1 && j > 1) {
        if (M[i-1][j-1] == 0) {
            i--;
            j--;
            solution = s[j-1] + solution;
        } else if (p[i-1] == "*" && M[i][j-1] == 0) {
            j--;
            solution = s[j-1] + solution;
        } else if (p[i-1] == "*" && M[i][j-1] != 0 && M[i-1][j-1] != 0 && M[i-1][j] == 0) {
            i--;
        }
        else
            return false;
    }
    return true
}

function isMatch(s: string, p: string): boolean {
    const M:number[][] = new Array<Array<number>>(p.length+1);
    let initPrefixDist = 0 
    for (let i = 0; i <= p.length; i++ ){
        initPrefixDist = i > 0 && p[i - 1] != "*" ? initPrefixDist + 1 : initPrefixDist;
        M[i] = new Array(s.length + 1);
        M[i][0] = initPrefixDist;
    }
    for (let j = 0; j <= s.length; j++ ){
        M[0][j] = j
    }
    for (let i = 1; i <= p.length; i++) {
        for (var j = 1; j <= s.length; j++) {
            var localDist = 0, topPrefixDist = 0, leftPrefixDist = 0, adjRow = 0;
            if ( p[i-1] != "*" && p[i-1] != s[j-1] && p[i-1] != "?" )
                localDist = 1;
            if ( p[i-1] != "*" ){
                topPrefixDist = 1
                leftPrefixDist = 1
            }/*
            if ( i > 1 && p[i-1] == "?" && p[i-2] == "*" ){
                let k = i-1
                while ( p[k] != "*" ){
                    k--
                }
                adjRow = ((i-1)-k)+1
            }*/

            M[i][j] = Math.min(M[i-adjRow][j-1] + leftPrefixDist, M[i-adjRow-1][j] + topPrefixDist, M[i-adjRow-1][j-1] + localDist);
        }
    }
    return validPath(M, s, p)
}

let pattern = "m??*ss*?i*pi"
let str = "mississippi"
var match = isMatch(str, pattern);
console.log(match);

pattern = "me?*t*?ro?"
str = "meriggiotooprol"
var match = isMatch(str, pattern);
console.log(match);

pattern = "?a"
str = "a"
var match = isMatch(str, pattern);
console.log(match);

pattern = "******";
str = "";
var match = isMatch(str, pattern);
console.log(match);