function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map: Map<number, number> = new Map()

    for ( let i = 0; i < nums.length; i++ ){
        if ( !map.has(nums[i]) || Math.abs(map.get(nums[i])!-i) > k ) 
            map.set(nums[i], i)
        else
            return true
    }
    return false
};