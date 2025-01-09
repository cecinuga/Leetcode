function removeDuplicates(nums: number[]): number {
    const uniqueNums = Array.from(new Set(nums))
    for(let i = 0; i < uniqueNums.length; i++){
        nums[i] = uniqueNums[i]
    }
    return uniqueNums.length
}