function summaryRanges(nums: number[]): string[] {
    if ( nums.length == 0 ) return []
    if ( nums.length == 1 ) return [nums[0].toString()]
    
    let range = []
    const ranges:string[] = []

    for ( let i = 0, j = 1; i < nums.length && j <= nums.length; i++,j++ ){
        if ( range.length==0 && nums[j]-nums[i] == 1 ){
            range.push(nums[i], nums[j])
        } else if ( nums[j]-nums[i] > 1 ){
            range[range.length>0?range.length-1:0] = nums[i]
            ranges.push(range.join("->"))
            range = []
        }
    }

    if ( nums[nums.length-1] - nums[nums.length-2] > 1 ){
        ranges.push(nums[nums.length-1].toString())
    } else if ( nums[nums.length-1] - nums[nums.length-2] == 1 ){
        range[1] = nums[nums.length-1]
        ranges.push(range.join("->"))
    }
    return ranges
};