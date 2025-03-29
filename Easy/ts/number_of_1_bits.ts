function hammingWeight(n: number): number { 
    if ( n == 0 ) return 0 
    let hw = 0, exp = 0

    do {
        hw++
        exp = Math.floor(Math.log2(n))
        n -= (2**(exp))
    } while ( n > 0);

    return hw
}