function majorityElement(nums: number[]): number {
    let c = 0, m = 0
    for ( let x of nums ){
        if ( c == 0 ){
            m = x
            c = 1
        } else if ( m == x )
            c++
        else c--
    }
    return m
};

