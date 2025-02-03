var generateParentheses = function(n: number) {
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


const n = 20
const res = generateParentheses(n)

console.log(res)
console.log(res.length)
console.log(res[res.length-1])