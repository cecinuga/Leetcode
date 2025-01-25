/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if ( n==0 ) return 0
    let tot = 0
    let [prev, curr] = [0, 1]
    for ( let i=1; i<n; i++ ){
        tot = prev + curr
        prev = curr
        curr = tot
    }
    return tot
};

console.log(fib(4))