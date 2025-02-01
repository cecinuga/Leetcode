/*function longestValidParentheses(s: string): number {
    let start:number=0, end:number=0, max:number=-Infinity, oldMax:number = 0
    let stillOpen:number=0

    console.log(s)
    for( let i = 0; i < s.length; i++ ){
        end = i
        if (s[i] == "(" ){
            stillOpen++
        }
        else if ( s[i] == ")" ){
            if( stillOpen >= 1 ){
                stillOpen--
            } else {
                start = end
            }
        }
        if ( end-start > max) {
            max = (end-start)-stillOpen
        }
        console.log(i, "s: "+start, "e: "+end, stillOpen)
    }

    return max
}*/
function longestValidParentheses(s) {
    var stack = [-1];
    var maxLen = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        else { // s[i] === ')'
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            }
            else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLen;
}
console.log(longestValidParentheses("()(()"));
console.log('=======================================');
console.log(longestValidParentheses("())))))))))))))((((()(((((())((((((()))"));
