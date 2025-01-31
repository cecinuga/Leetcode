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