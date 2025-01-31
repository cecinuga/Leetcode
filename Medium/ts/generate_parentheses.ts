/**
 * @param {number} n
 * @return {string[]}
 */
/*
function anticipatedVisit(tree: (string | undefined)[], i: number=0): string {
    if ( i > 0 && ( i >= tree.length-1 || i >= tree.length-2 ) ) return tree[i] || ""

    let [left, right] = [i*2, i*2+1]

    if ( left == 0 )
        left = 1
    if ( right == 1 )
        right = 2

    return `(${anticipatedVisit(tree, left)}${anticipatedVisit(tree, right)})`  
}

function anticipatedVisits(trees: (string | undefined)[][]): string{
    let res = ""
    for ( let tree of trees ){
        res += `${anticipatedVisit(tree)}`
    }
    return res
}

console.log(anticipatedVisits([["()","()","()"]]));
console.log(anticipatedVisits([["()","()",undefined,"()"]])); 
console.log(anticipatedVisits([["()"],["()"],["()"]])); 
console.log(anticipatedVisits([["()","()"],["()"]]));
console.log(anticipatedVisits([["()"],["()","()"], ["()", undefined, "()", undefined, "()"]]));
*/



var generateParenthesis = function(n: number) {
    const res: string[] = []

    function rec(str: string="(", actpa:number=1, totpa:number=1){
        if ( str.length == n*2 ) {
            res.push(str)
            return 
        }   

        if(actpa > 0)
            rec(`${str})`, actpa-1, totpa)
        
        if(totpa < n) 
            rec(`${str}(`, actpa+1, totpa+1)
    }
    rec()
    return res
}; 


const n = 3
const res = generateParenthesis(n)

console.log(res)