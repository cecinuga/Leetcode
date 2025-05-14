function tribonacci(n: number): number {
    if ( n === 0 ) return 0
    if ( n === 1 || n === 2 ) return 1

    let fib = 0
    let act = 0
    let prev1 = 1
    let prev2 = 1

    for ( let i = 2; i < n; i++ ){
      fib = act + prev1 + prev2

      act = prev1
      prev1 = prev2
      prev2 = fib
    }

    return fib
};

const n = 4
const fib = tribonacci(n)