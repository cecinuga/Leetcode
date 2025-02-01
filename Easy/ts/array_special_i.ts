function isArraySpecial(nums: number[]): boolean {
    let first = nums[0]%2

    for ( let i = 1; i < nums.length; i++ ){
        if( i%2==1 && nums[i]%2==first ) return false
        else if( i%2==0 && nums[i]%2!=first ) return false
    }
    return true
};