enum Ranks {
    First="Gold Medal",
    Second="Silver Medal",
    Third="Bronze Medal"
}

function heapify(nums: [number, number][], i: number){
    let max = i
    const left = (i*2)+1
    const right = (i*2)+2

    if ( left < nums.length && nums[left][0] > nums[max][0] ) max = left
    if ( right < nums.length && nums[right][0] > nums[max][0] ) max = right

    if ( max != i ){
        const temp = nums[i]
        nums[i] = nums[max]
        nums[max] = temp

        heapify(nums, max)
    }
}

function findRelativeRanks(score: number[]): string[] {
    if ( score.length == 1 ) return [ Ranks.First ]

    const res: string[] = []
    const heap: [number, number][] = []

    for ( let i = 0; i < score.length; i++ ) heap.push([score[i], i])
    for ( let i = Math.floor(score.length/2); i >= 0; i-- ) heapify(heap, i)

    for ( let i = 0; i < score.length; i++ ){        
        const temp = heap[0]
        heap[0] = heap[heap.length-1]
        heap[heap.length-1] = temp

        const localMax = heap.pop()

        res[localMax[1]] = (i+1).toString()
        if ( i == 0 ) res[localMax[1]] = Ranks.First
        if ( i == 1 ) res[localMax[1]] = Ranks.Second
        if ( i == 2 ) res[localMax[1]] = Ranks.Third

        heapify(heap, 0)
    }
    
    return res
};

const scores = [10,3,8,9,4]
const res = findRelativeRanks(scores)