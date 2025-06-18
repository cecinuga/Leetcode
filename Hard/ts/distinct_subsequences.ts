function numDistinct(s: string, t: string): number {
    const memo: number[][] = Array.from({ length: t.length }, () => Array(s.length).fill(-1));

    function dfs(actRow: number, actCol: number): number {
      if (actRow < 0) return 1;
      if (actCol < 0) return 0;
  
      if (memo[actRow][actCol] !== -1) return memo[actRow][actCol];
  
      let total = 0;
  
      for (let col = actCol; col >= actRow; col--) {
        if (t[actRow] === s[col]) {
          total += dfs(actRow - 1, col - 1);
        }
      }
  
      memo[actRow][actCol] = total;
      return total;
    }
  
    return dfs(t.length - 1, s.length - 1);
};

/*
function numDistinct(s: string, t: string): number {
    if ( t.length === 0 ) return 1
    if ( s.length === 0 ) return 0

    const remainingStr = s.slice(s.slice(1).indexOf(t[0]))

    if ( s[0] === t[0] )
        return numDistinct(remainingStr, t.slice(1)) + numDistinct(remainingStr, t)
    else 
        return numDistinct(remainingStr, t)
}*/

let s = "adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc"
let t = "bcddceeeebecbc"

let s1 = "rabbbit"
let t1 = "rabbit"

let s2 = "babgbag"
let t2 = "bag"

const num1 = numDistinct("mossmoo", "mo")
console.log(num1)

const num2 = numDistinct(s2, t2)
console.log(num2)

const num = numDistinct(s, t)
console.log(num)