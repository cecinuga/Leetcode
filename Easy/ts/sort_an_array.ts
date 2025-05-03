function heapify(nums: number[], i: number, heapSize: number) {
    let max = i
    const left = (i*2)+1
    const right = (i*2)+2

    if ( left < heapSize && nums[left] > nums[max] ) max = left
    if ( right < heapSize && nums[right] > nums[max] ) max = right

    if ( max != i ) {
        const temp = nums[i]
        nums[i] = nums[max]
        nums[max] = temp

        heapify(nums, max, heapSize)
    }
}

function sortArray(nums: number[]): number[] {
    let heapSize = nums.length
    for ( let i = Math.floor(nums.length/2); i >= 0; i-- ) heapify(nums, i, heapSize)

    for ( let i = 0; i < nums.length; i++ ){
        const temp = nums[0]
        nums[0] = nums[(nums.length-1)-i]
        nums[(nums.length-1)-i] = temp

        heapSize--
        heapify(nums, 0, heapSize)
    }

    return nums
};

const arr = [5,1,1,2,0,0]
const sorted = sortArray(arr)