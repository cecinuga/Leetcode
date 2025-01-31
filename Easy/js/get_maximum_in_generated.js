/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if ( n == 0 ) return 0
    else if ( n == 1 ) return 1

    let max = -Infinity
    let nums = [0, 1]

    for ( let i=2; i <= n; i++ ){
        if ( i%2==0 )
            nums.push(nums[i/2])
        else
            nums.push(nums[Math.floor(i/2)] + nums[Math.ceil(i/2)])

        if ( nums[i] > max )
            max = nums[i]
    }
    return max
};


getMaximumGenerated(7)